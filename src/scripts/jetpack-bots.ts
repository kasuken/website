import { missDirection, segmentIntersectsBounds, type Bounds, type Point } from './bot-duel-geometry';

const elements = [...document.querySelectorAll<HTMLDivElement>('.jetbot')];
const laserLayer = document.querySelector<HTMLDivElement>('.jetbot-lasers');
const control = document.querySelector<HTMLButtonElement>('.jetbot-control');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const TARGETS = 'main h1, main h2, main h3, main img, main article, main [data-reveal], main a.btn, main button, footer h4';
const LINES = ['beep boop!', 'git push', '0 bugs found*', 'hello, dev!', 'LGTM', 'brb, refueling', 'it works on my machine'];
const FLYER_LINES = ['air support online', 'pew pew!', 'aim: still compiling', 'just passing through', 'friendly rivalry'];
const BOT_W = 48;
const BOT_H = 63;
const FEET = 48;
const BEAM_LENGTH = 22;

type Perch = { el: Element; dx: number; dy: number };
type Flight = { from: Point; target: Perch; start: number; duration: number; lift: number };
type Bot = {
	el: HTMLDivElement;
	sprite: SVGElement;
	bubble: HTMLDivElement;
	flyer: boolean;
	key: string;
	pos: Point;
	previous: Point;
	perch: Perch | null;
	flight: Flight | null;
	face: number;
	nextHop: number;
	bubbleTimer: number;
	parkTimer: number;
	parked: boolean;
};
type Beam = { el: HTMLDivElement; origin: Point; direction: Point; start: number; distance: number };

if (elements.length === 2 && laserLayer && control) {
	const storedParked = (key: string) => {
		try { return sessionStorage.getItem(key) === '1'; }
		catch { return false; } // Storage can be disabled; in-memory parking still works.
	};
	const bots: Bot[] = elements.map((el, index) => ({
		el,
		sprite: el.querySelector<SVGElement>('.jetbot__sprite')!,
		bubble: el.querySelector<HTMLDivElement>('.jetbot__bubble')!,
		flyer: el.dataset.kind === 'flyer',
		key: index === 0 ? 'jetbot-parked' : 'jetbot-flyer-parked',
		pos: { x: index === 0 ? innerWidth - BOT_W - 24 : 24, y: innerHeight + 40 },
		previous: { x: 0, y: innerHeight + 40 },
		perch: null, flight: null, face: index === 0 ? -1 : 1,
		nextHop: performance.now() + 900 + index * 700,
		bubbleTimer: 0, parkTimer: 0,
		parked: storedParked(index === 0 ? 'jetbot-parked' : 'jetbot-flyer-parked'),
	}));
	const beams: Beam[] = [];
	let frame = 0;
	let pausedAt: number | null = performance.now();
	let nextShot = performance.now() + 6500;
	let turn = 0;
	const scale = () => innerWidth <= 640 ? 0.75 : 1;
	const headerBottom = () => Math.max(0, document.querySelector('header')?.getBoundingClientRect().bottom ?? 0);
	const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, Math.max(min, max)));

	const landingPoint = (bot: Bot, perch: Perch): Point => {
		const r = perch.el.getBoundingClientRect();
		const s = scale();
		return {
			x: clamp(r.left + perch.dx, 12, innerWidth - BOT_W * s - 12),
			y: clamp(r.top + perch.dy - FEET * s - (bot.flyer ? 62 * s : 0), headerBottom() + 18, innerHeight - BOT_H * s - 12),
		};
	};
	const isUsable = (el: Element) => {
		const r = el.getBoundingClientRect();
		if (r.width < 64 || r.height < 12 || r.top < headerBottom() + BOT_H * scale() + 8 || r.top > innerHeight - 24) return false;
		if (r.right < 0 || r.left > innerWidth) return false;
		const style = getComputedStyle(el);
		return style.visibility !== 'hidden' && style.display !== 'none' && Number(style.opacity) > 0.1;
	};
	const pickPerch = (bot: Bot): Perch | null => {
		const visible = [...document.querySelectorAll(TARGETS)].filter(isUsable);
		// A narrow viewport can have just one usable heading; move along it, too.
		const alternatives = visible.filter(el => el !== bot.perch?.el);
		const candidates = alternatives.length ? alternatives : visible;
		if (!candidates.length) return null;
		const scored = candidates.map(el => {
			const r = el.getBoundingClientRect();
			return { el, score: Math.random() * 400 + Math.min(Math.hypot(r.left - bot.pos.x, r.top - bot.pos.y), 500) };
		}).sort((a, b) => b.score - a.score);
		for (const { el } of scored) {
			const r = el.getBoundingClientRect();
			const style = getComputedStyle(el);
			const size = parseFloat(style.fontSize);
			const line = parseFloat(style.lineHeight) || size * 1.2;
			const dy = /^H[1-6]$/.test(el.tagName) ? Math.max(0, (line - size) / 2 + size * 0.14) : 0;
			const span = Math.max(0, Math.min(r.width, innerWidth) - BOT_W * scale());
			for (const dx of [Math.random() * span, 0, span]) {
				const perch = { el, dx, dy };
				const to = landingPoint(bot, perch);
				// Leave room for a readable exchange even on a phone-sized heading.
				if (bots.every(other => other === bot || other.parked || Math.abs(to.x - other.pos.x) > 150 * scale())) return perch;
			}
		}
		return null;
	};
	const launch = (bot: Bot, now: number) => {
		const target = pickPerch(bot);
		if (!target) { bot.nextHop = now + 1200; return; }
		const to = landingPoint(bot, target);
		const distance = Math.hypot(to.x - bot.pos.x, to.y - bot.pos.y);
		bot.flight = {
			from: { ...bot.pos }, target, start: now,
			duration: Math.min(1800, 550 + distance * 1.4),
			lift: bot.flyer ? 36 + Math.min(distance * 0.16, 70) : 60 + Math.min(distance * 0.35, 160),
		};
		bot.perch = null;
		bot.el.dataset.state = 'flying';
	};
	const render = (bot: Bot, tilt = 0) => {
		bot.el.style.transform = `translate3d(${Math.round(bot.pos.x)}px, ${Math.round(bot.pos.y)}px, 0) scale(${scale()})`;
		bot.sprite.style.transform = `scaleX(${bot.face}) rotate(${tilt}deg)`;
	};
	const ease = (t: number) => t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
	const move = (bot: Bot, now: number) => {
		bot.previous = { ...bot.pos };
		if (bot.flight) {
			const flight = bot.flight;
			if (!flight.target.el.isConnected || !isUsable(flight.target.el)) {
				bot.flight = null;
				launch(bot, now);
				return;
			}
			const t = Math.min(1, (now - flight.start) / flight.duration);
			const e = ease(t);
			const to = landingPoint(bot, flight.target);
			const cx = (flight.from.x + to.x) / 2;
			const cy = Math.max(headerBottom() + 12, Math.min(flight.from.y, to.y) - flight.lift);
			bot.pos = {
				x: (1 - e) ** 2 * flight.from.x + 2 * (1 - e) * e * cx + e ** 2 * to.x,
				y: (1 - e) ** 2 * flight.from.y + 2 * (1 - e) * e * cy + e ** 2 * to.y,
			};
			const vx = bot.pos.x - bot.previous.x;
			if (Math.abs(vx) > 0.3) bot.face = vx > 0 ? 1 : -1;
			render(bot, clamp(vx * 2, -14, 14) * bot.face);
			if (t >= 1) {
				bot.perch = flight.target;
				bot.flight = null;
				bot.el.dataset.state = bot.flyer ? 'hovering' : 'idle';
				bot.nextHop = now + 2600 + Math.random() * 3200;
			}
		} else if (bot.perch) {
			if (!bot.perch.el.isConnected || !isUsable(bot.perch.el)) launch(bot, now);
			else {
				bot.pos = landingPoint(bot, bot.perch);
				if (bot.flyer) bot.pos.y += Math.sin(now / 420) * 4;
				render(bot);
				if (now >= bot.nextHop) launch(bot, now);
			}
		} else if (now >= bot.nextHop) launch(bot, now);
	};

	// Pad the full sprite and gun, including idle bob and the beam's thickness.
	const bounds = (bot: Bot): Bounds => {
		const s = scale();
		return {
			left: Math.min(bot.pos.x, bot.previous.x) - 12 * s,
			top: Math.min(bot.pos.y, bot.previous.y) - 9 * s,
			right: Math.max(bot.pos.x, bot.previous.x) + 60 * s,
			bottom: Math.max(bot.pos.y, bot.previous.y) + BOT_H * s + 9 * s,
		};
	};
	const clearBeams = () => {
		beams.forEach(beam => beam.el.remove());
		beams.length = 0;
	};
	const shoot = (now: number) => {
		if (now < nextShot || bots.some(bot => bot.parked || bot.flight || !bot.perch)) return;
		nextShot = now + 450;
		const shooter = bots[turn % 2];
		const target = bots[(turn + 1) % 2];
		shooter.face = target.pos.x > shooter.pos.x ? 1 : -1;
		render(shooter);
		const s = scale();
		// Start just beyond the barrel, outside the shooter's safety bounds.
		const origin = { x: shooter.pos.x + (shooter.face === 1 ? 64 : -16) * s, y: shooter.pos.y + 37.5 * s };
		const center = { x: target.pos.x + 24 * s, y: target.pos.y + 29 * s };
		const direction = missDirection(origin, center, 74 * s, turn % 2 === 0 ? -1 : 1);
		if (!direction) return;
		// Do not fire backwards through our own gun when the bots are vertically aligned.
		if (direction.x * shooter.face < 0.2) return;
		const el = document.createElement('div');
		el.className = 'jetbot-laser';
		el.style.setProperty('--laser-color', shooter.flyer ? '#a78bfa' : 'var(--accent)');
		laserLayer.append(el);
		beams.push({ el, origin, direction, start: now, distance: 0 });
		nextShot = now + 2300 + Math.random() * 1700;
		turn++;
		// The target moves on soon afterwards; misses never depend on this dodge.
		target.nextHop = Math.min(target.nextHop, now + 500);
	};
	const updateBeams = (now: number) => {
		for (let i = beams.length - 1; i >= 0; i--) {
			const beam = beams[i];
			const distance = (now - beam.start) * 0.95;
			const tail = Math.max(0, beam.distance - BEAM_LENGTH);
			const from = { x: beam.origin.x + beam.direction.x * tail, y: beam.origin.y + beam.direction.y * tail };
			const head = { x: beam.origin.x + beam.direction.x * distance, y: beam.origin.y + beam.direction.y * distance };
			// Check the whole swept segment, so a slow frame cannot tunnel through a bot.
			if (now - beam.start > 1400 || head.x < -30 || head.x > innerWidth + 30 || head.y < headerBottom() || head.y > innerHeight + 30 || bots.some(bot => !bot.parked && segmentIntersectsBounds(from, head, bounds(bot)))) {
				beam.el.remove();
				beams.splice(i, 1);
				continue;
			}
			beam.distance = distance;
			const visibleTail = Math.max(0, distance - BEAM_LENGTH);
			beam.el.style.transform = `translate3d(${beam.origin.x + beam.direction.x * visibleTail}px, ${beam.origin.y + beam.direction.y * visibleTail}px, 0) rotate(${Math.atan2(beam.direction.y, beam.direction.x)}rad) scaleX(${Math.min(1, distance / BEAM_LENGTH)})`;
		}
	};
	const tick = (now: number) => {
		frame = 0;
		bots.filter(bot => !bot.parked).forEach(bot => move(bot, now));
		shoot(now);
		updateBeams(now);
		frame = requestAnimationFrame(tick);
	};
	const syncControl = () => {
		const allParked = bots.every(bot => bot.parked);
		control.textContent = allParked ? 'Resume robots' : 'Park robots';
		control.setAttribute('aria-pressed', String(allParked));
		control.hidden = reducedMotion.matches;
	};
	const syncPlayback = () => {
		const now = performance.now();
		const paused = document.hidden || reducedMotion.matches || bots.every(bot => bot.parked);
		for (const bot of bots) bot.el.toggleAttribute('data-paused', document.hidden || reducedMotion.matches);
		if (paused) {
			if (pausedAt === null) pausedAt = now;
			cancelAnimationFrame(frame);
			frame = 0;
			clearBeams();
		} else if (!frame) {
			const elapsed = pausedAt === null ? 0 : now - pausedAt;
			for (const bot of bots) {
				if (bot.flight) bot.flight.start += elapsed;
				bot.nextHop += elapsed;
			}
			nextShot = now + 2500;
			pausedAt = null;
			frame = requestAnimationFrame(tick);
		}
		syncControl();
	};
	const setParked = (bot: Bot, parked: boolean) => {
		bot.parked = parked;
		bot.el.toggleAttribute('data-parked', parked);
		try {
			if (parked) sessionStorage.setItem(bot.key, '1');
			else sessionStorage.removeItem(bot.key);
		} catch { /* Parking remains available when session storage is blocked. */ }
		if (!parked) {
			bot.flight = null;
			bot.perch = null;
		}
		clearBeams();
		syncPlayback();
		if (!parked) bot.nextHop = performance.now() + 300;
	};
	const say = (bot: Bot, text: string) => {
		bot.bubble.textContent = text;
		bot.bubble.dataset.show = '';
		// Keep the bubble within the viewport even when a bot is near an edge.
		const halfWidth = bot.bubble.offsetWidth * scale() / 2;
		const center = bot.pos.x + 24 * scale();
		bot.bubble.style.marginLeft = `${(clamp(center, halfWidth + 8, innerWidth - halfWidth - 8) - center) / scale()}px`;
		clearTimeout(bot.bubbleTimer);
		bot.bubbleTimer = window.setTimeout(() => delete bot.bubble.dataset.show, 1800);
	};
	for (const bot of bots) {
		bot.el.toggleAttribute('data-parked', bot.parked);
		bot.el.dataset.state = 'flying';
		bot.el.dataset.ready = '';
		render(bot);
		bot.el.addEventListener('click', () => {
			const lines = bot.flyer ? FLYER_LINES : LINES;
			say(bot, lines[Math.floor(Math.random() * lines.length)]);
			if (bot.perch) bot.nextHop = performance.now() + 1400;
		});
		bot.el.addEventListener('dblclick', () => {
			say(bot, 'see you in orbit!');
			clearTimeout(bot.parkTimer);
			bot.parkTimer = window.setTimeout(() => setParked(bot, true), 700);
		});
	}
	control.addEventListener('click', () => {
		const park = !bots.every(bot => bot.parked);
		for (const bot of bots) {
			clearTimeout(bot.parkTimer);
			setParked(bot, park);
		}
	});
	document.addEventListener('visibilitychange', syncPlayback);
	reducedMotion.addEventListener('change', syncPlayback);
	window.addEventListener('resize', clearBeams);
	window.addEventListener('pagehide', () => {
		cancelAnimationFrame(frame);
		frame = 0;
		pausedAt = performance.now();
		clearBeams();
	});
	window.addEventListener('pageshow', syncPlayback);
	syncPlayback();
}
