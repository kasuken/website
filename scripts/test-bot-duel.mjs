import test from 'node:test';
import assert from 'node:assert/strict';
import { missDirection, segmentIntersectsBounds } from '../src/scripts/bot-duel-geometry.ts';

test('every shot direction clears the target in both directions at mobile and desktop sizes', () => {
	for (const scale of [0.75, 1]) {
		for (const side of [-1, 1]) {
			for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
				for (const distance of [100, 150, 250, 600, 1400]) {
					const origin = { x: 300, y: 400 };
					const target = { x: origin.x + Math.cos(angle) * distance, y: origin.y + Math.sin(angle) * distance };
					const clearance = 74 * scale;
					const direction = missDirection(origin, target, clearance, side);
					assert.ok(direction);
					const closest = Math.abs((target.x - origin.x) * direction.y - (target.y - origin.y) * direction.x);
					assert.ok(closest > clearance, `ray missed safety clearance at angle ${angle}`);
					assert.equal(segmentIntersectsBounds(origin, {
						x: origin.x + direction.x * 2400, y: origin.y + direction.y * 2400,
					}, {
						left: target.x - 36 * scale, right: target.x + 36 * scale,
						top: target.y - 38 * scale, bottom: target.y + 43 * scale,
					}), false);
				}
			}
		}
	}
});

test('bots too close together do not fire', () => {
	assert.equal(missDirection({ x: 0, y: 0 }, { x: 80, y: 30 }, 74, 1), null);
});

test('swept collision catches slow frames, edge touches, stationary and axis aligned beams', () => {
	const bounds = { left: 40, right: 60, top: 40, bottom: 60 };
	for (const [from, to, expected] of [
		[{ x: 0, y: 50 }, { x: 100, y: 50 }, true],
		[{ x: 50, y: 0 }, { x: 50, y: 100 }, true],
		[{ x: 100, y: 50 }, { x: 0, y: 50 }, true],
		[{ x: 0, y: 0 }, { x: 100, y: 100 }, true],
		[{ x: 0, y: 40 }, { x: 100, y: 40 }, true],
		[{ x: 50, y: 50 }, { x: 50, y: 50 }, true],
		[{ x: 0, y: 0 }, { x: 0, y: 0 }, false],
		[{ x: 0, y: 39 }, { x: 100, y: 39 }, false],
		[{ x: 39, y: 0 }, { x: 39, y: 100 }, false],
	]) assert.equal(segmentIntersectsBounds(from, to, bounds), expected);
});
