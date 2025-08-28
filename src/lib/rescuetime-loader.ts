interface RescueTimeApiResponse {
  rows: Array<Array<string | number>>
}

interface RescueTimePulseResponse {
  id: string
  date: string
  productivity_pulse: number
  very_productive_percentage: number
  productive_percentage: number
  neutral_percentage: number
  distracting_percentage: number
  very_distracting_percentage: number
  all_productive_percentage: number
  all_distracting_percentage: number
}

interface ProductivityDay {
  date: string
  seconds: number
  hours: number
  productivity: number
}

interface ProductivityPulse {
  pulse: number
  date: string
  breakdown: {
    veryProductive: number
    productive: number
    neutral: number
    distracting: number
    veryDistracting: number
  }
}

interface RescueTimeData {
  dailyData: ProductivityDay[]
  productivityPulse: ProductivityPulse | null
}

const RESCUE_TIME_API_KEY = process.env.RESCUETIME_API_KEY || ""

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

export async function loadProductivityPulse(): Promise<ProductivityPulse | null> {
  if (!RESCUE_TIME_API_KEY) {
    console.warn('[rescuetime-loader] RESCUETIME_API_KEY not found for Productivity Pulse')
    return null
  }

  try {
    const today = new Date()
    const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000))
    const dateStr = formatDate(yesterday) // Use yesterday since today might not be complete
    
    const url = `https://www.rescuetime.com/anapi/daily_summary_feed?key=${RESCUE_TIME_API_KEY}&format=json`
    
    console.log('[rescuetime-loader] Fetching Productivity Pulse...')
    
    const response = await fetch(url)
    
    if (!response.ok) {
      console.error(`[rescuetime-loader] Productivity Pulse API error: ${response.status} ${response.statusText}`)
      return null
    }
    
    const data: RescueTimePulseResponse[] = await response.json()
    console.log('[rescuetime-loader] Productivity Pulse response entries:', data.length)
    
    if (!data || data.length === 0) {
      console.warn('[rescuetime-loader] No Productivity Pulse data available')
      return null
    }
    
    // Get the most recent entry
    const latestEntry = data[0]
    console.log('[rescuetime-loader] Latest Productivity Pulse:', latestEntry.productivity_pulse, 'for date:', latestEntry.date)
    
    return {
      pulse: latestEntry.productivity_pulse,
      date: latestEntry.date,
      breakdown: {
        veryProductive: latestEntry.very_productive_percentage,
        productive: latestEntry.productive_percentage,
        neutral: latestEntry.neutral_percentage,
        distracting: latestEntry.distracting_percentage,
        veryDistracting: latestEntry.very_distracting_percentage
      }
    }
    
  } catch (error) {
    console.error('[rescuetime-loader] Error fetching Productivity Pulse:', error)
    return null
  }
}

export async function loadRescueTimeData(): Promise<RescueTimeData> {
  const today = new Date()
  const sevenDaysAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000))
  
  const startDate = formatDate(sevenDaysAgo)
  const endDate = formatDate(today)
  
  console.log('[rescuetime-loader] Fetching productivity data for date range:', startDate, 'to', endDate)
  
  // Check if API key is available
  if (!RESCUE_TIME_API_KEY) {
    console.warn('[rescuetime-loader] RESCUETIME_API_KEY not found in environment variables, using test data')
    return {
      dailyData: generateTestData(today),
      productivityPulse: null
    }
  }
  
  try {
    // Fetch both daily data and productivity pulse in parallel
    const [dailyData, productivityPulse] = await Promise.all([
      fetchDailyProductivityData(startDate, endDate, today),
      loadProductivityPulse()
    ])
    
    return {
      dailyData,
      productivityPulse
    }
    
  } catch (error) {
    console.error('[rescuetime-loader] Error fetching RescueTime data:', error)
    console.log('[rescuetime-loader] Falling back to test data')
    return {
      dailyData: generateTestData(today),
      productivityPulse: null
    }
  }
}

async function fetchDailyProductivityData(startDate: string, endDate: string, today: Date): Promise<ProductivityDay[]> {
    const url = `https://www.rescuetime.com/anapi/data?key=${RESCUE_TIME_API_KEY}&perspective=interval&restrict_kind=productivity&interval=day&restrict_begin=${startDate}&restrict_end=${endDate}&format=json`
    
    console.log('[rescuetime-loader] Making API request to RescueTime...')
    console.log('[rescuetime-loader] API URL (key hidden):', url.replace(RESCUE_TIME_API_KEY, 'HIDDEN_KEY'))
    
    const response = await fetch(url)
    
    if (!response.ok) {
      console.error(`[rescuetime-loader] RescueTime API error: ${response.status} ${response.statusText}`)
      throw new Error(`RescueTime API error: ${response.status}`)
    }
    
    const data: RescueTimeApiResponse = await response.json()
    console.log('[rescuetime-loader] RescueTime API response rows:', data.rows?.length || 0)
    
    if (!data.rows || data.rows.length === 0) {
      console.warn('[rescuetime-loader] No productivity data returned from RescueTime API, generating test data')
      return generateTestData(today)
    }
    
    console.log('[rescuetime-loader] Sample raw data rows:', data.rows.slice(0, 3))
    
    // Process data - with interval perspective, we get [Date, Time Spent (seconds), Number of People, Productivity]
    const dailyData = new Map<string, { totalSeconds: number, weightedProductivity: number }>()
    
    data.rows.forEach((row, index) => {
      if (index < 5) {
        console.log(`[rescuetime-loader] Raw row ${index}:`, row)
      }
      
      // For interval perspective: [Date, Time Spent (seconds), Number of People, Productivity]
      if (row.length >= 4) {
        const rawDate = String(row[0])
        const seconds = Number(row[1])
        const productivity = Number(row[3])
        
        // Convert datetime to date only (YYYY-MM-DD format)
        const dateStr = rawDate.split('T')[0]
        
        if (index < 5) {
          console.log(`[rescuetime-loader] Parsed row ${index}:`, { 
            rawDate,
            date: dateStr,
            seconds, 
            productivity
          })
        }
        
        // Validate that we have a proper date string
        if (dateStr && !isNaN(Date.parse(dateStr))) {
          if (!dailyData.has(dateStr)) {
            dailyData.set(dateStr, { totalSeconds: 0, weightedProductivity: 0 })
          }
          
          const dayData = dailyData.get(dateStr)!
          dayData.totalSeconds += seconds
          dayData.weightedProductivity += seconds * productivity
        } else {
          console.warn(`[rescuetime-loader] Invalid date in row ${index}:`, dateStr)
        }
      } else {
        console.warn(`[rescuetime-loader] Unexpected row format at ${index}:`, row)
      }
    })
    
    // Convert to array and calculate final productivity scores
    const productivityDays: ProductivityDay[] = []
    for (const [date, data] of dailyData) {
      const avgProductivity = data.totalSeconds > 0 ? data.weightedProductivity / data.totalSeconds : 0
      productivityDays.push({
        date,
        seconds: data.totalSeconds,
        hours: Math.round((data.totalSeconds / 3600) * 10) / 10,
        productivity: Math.round(avgProductivity * 10) / 10
      })
    }
    
    // Fill in missing days with zero data for complete 7-day view
    const completeData: ProductivityDay[] = []
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today.getTime() - ((6 - i) * 24 * 60 * 60 * 1000))
      const dateStr = formatDate(currentDate)
      
      const existingDay = productivityDays.find(day => day.date === dateStr)
      if (existingDay) {
        completeData.push(existingDay)
      } else {
        completeData.push({
          date: dateStr,
          seconds: 0,
          hours: 0,
          productivity: 0
        })
      }
    }
    
    console.log('[rescuetime-loader] Successfully processed RescueTime data:', completeData.length, 'days')
    console.log('[rescuetime-loader] Total hours this week:', completeData.reduce((sum, day) => sum + day.hours, 0))
    console.log('[rescuetime-loader] Average productivity:', 
      completeData.reduce((sum, day, _, arr) => sum + day.productivity / arr.length, 0).toFixed(2)
    )
    
    return completeData
}

function generateTestData(today: Date): ProductivityDay[] {
  console.log('[rescuetime-loader] Generating realistic test data for 7 days')
  
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today.getTime() - ((6 - i) * 24 * 60 * 60 * 1000))
    const dateStr = formatDate(date)
    
    // Create realistic productivity patterns
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const baseHours = isWeekend ? 1 + Math.random() * 4 : 4 + Math.random() * 6 // Weekend: 1-5h, Weekday: 4-10h
    const hours = Math.round(baseHours * 10) / 10
    
    // Productivity tends to be higher on focused work days
    let productivity: number
    if (isWeekend) {
      productivity = -0.8 + Math.random() * 1.6 // Weekend: -0.8 to 0.8
    } else {
      productivity = 0.2 + Math.random() * 1.6 // Weekday: 0.2 to 1.8
    }
    productivity = Math.round(productivity * 10) / 10
    
    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
    console.log(`[rescuetime-loader] ${dayName} (${dateStr}): ${hours}h, productivity: ${productivity}`)
    
    return {
      date: dateStr,
      seconds: Math.round(hours * 3600),
      hours: hours,
      productivity: productivity
    }
  })
}