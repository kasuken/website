export type Point = { x: number; y: number };
export type Bounds = { left: number; top: number; right: number; bottom: number };

/** Turn far enough off target that the entire ray clears its safety circle. */
export function missDirection(from: Point, target: Point, clearance: number, side: number): Point | null {
	const dx = target.x - from.x;
	const dy = target.y - from.y;
	const distance = Math.hypot(dx, dy);
	if (distance < clearance * 1.25) return null;
	const angle = Math.atan2(dy, dx) + (side < 0 ? -1 : 1) * (Math.asin(clearance / distance) + 0.08);
	return { x: Math.cos(angle), y: Math.sin(angle) };
}

/** Slab intersection includes edges and the full swept path between frames. */
export function segmentIntersectsBounds(from: Point, to: Point, bounds: Bounds): boolean {
	let enter = 0;
	let exit = 1;
	for (const [start, delta, min, max] of [
		[from.x, to.x - from.x, bounds.left, bounds.right],
		[from.y, to.y - from.y, bounds.top, bounds.bottom],
	]) {
		if (Math.abs(delta) < 1e-9) {
			if (start < min || start > max) return false;
			continue;
		}
		const a = (min - start) / delta;
		const b = (max - start) / delta;
		enter = Math.max(enter, Math.min(a, b));
		exit = Math.min(exit, Math.max(a, b));
		if (enter > exit) return false;
	}
	return true;
}
