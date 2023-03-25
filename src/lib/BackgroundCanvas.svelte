<script lang="ts">
	import { onMount } from "svelte";

	const bgColor = "#462848";
	const color = "#5e3461";
	const CHANGEDUR = 5000; // ms
	const TICK = 50; // ms
	const STEP = TICK / CHANGEDUR;
	const boxSize = 50;
	const LWIDTH = 5;

	const maxw = window.innerWidth;
	const maxh = window.innerHeight;
	const maxr = Math.ceil(maxh / boxSize);
	const maxc = Math.ceil(maxw / boxSize);

	onMount(() => {
		const canvas = document.querySelector("canvas");
		canvas.width = maxw;
		canvas.height = maxh;

		let context = canvas.getContext("2d");
		context.strokeStyle = color;
		context.lineWidth = LWIDTH;

		const boxes = [];

		for (let r = 0; r <= maxr; r++) {
			boxes.push([]);
			for (let c = 0; c <= maxc; c++) {
				boxes[r].push([]);
				boxes[r][c] = [];
				for (let w = 0; w < 2; w++) {
					const newThing = {
						val: Math.floor(Math.random() * 101) / 100,
						dir: randDir(0),
						wait: CHANGEDUR,
						drawOutward: Math.random() < 0.5,
					};
					boxes[r][c].push(newThing);
				}
			}
		}

		function updateWalls() {
			for (let r = 0; r <= maxr; r++) {
				for (let c = 0; c <= maxc; c++) {
					for (let w = 0; w < 2; w++) {
						let { val, dir, wait } = boxes[r][c][w];
						if (dir == 0) {
							// Waiting a full CHANGEDUR
							if (wait > 0) {
								wait -= TICK;
							} else {
								wait = CHANGEDUR;
								boxes[r][c][w].dir = randDir();
							}
							boxes[r][c][w].wait = wait;
						} else {
							// Moving
							let newVal = val + dir * STEP;
							let newDir = dir;
							if (newVal > 1) {
								newVal = 1;
								newDir = randDir(dir);
							}
							if (newVal < 0) {
								newVal = 0;
								newDir = randDir(dir);
							}
							boxes[r][c][w].val = newVal;
							boxes[r][c][w].dir = newDir;
						}
					}
				}
			}
		}

		function draw() {
			context.clearRect(0, 0, canvas.width, canvas.height);
			for (let r = 0; r <= maxr; r++) {
				for (let c = 0; c <= maxc; c++) {
					let x = (c - 1) * boxSize;
					let y = (r - 1) * boxSize;

					let fracBottom = boxes[r][c][0].val;
					let fracRight = boxes[r][c][1].val;

					const LENGTH = boxSize + LWIDTH;
					const EXCESS = LWIDTH / 2;

					// Bottom
					if (boxes[r][c][0].drawOutward) {
						context.beginPath();
						context.moveTo(x - EXCESS, y + boxSize);
						context.lineTo(
							x + LENGTH * fracBottom - EXCESS,
							y + boxSize
						);
						context.stroke();
					} else {
						context.beginPath();
						context.moveTo(
							x + LENGTH * fracBottom - EXCESS,
							y + boxSize
						);
						context.lineTo(x + LENGTH - EXCESS, y + boxSize);
						context.stroke();
					}

					// Right
					if (boxes[r][c][1].drawOutward) {
						context.beginPath();
						context.moveTo(x + boxSize, y - EXCESS);
						context.lineTo(
							x + boxSize,
							y + LENGTH * fracRight - EXCESS
						);
						context.stroke();
					} else {
						context.beginPath();
						context.moveTo(
							x + boxSize,
							y + LENGTH * fracRight - EXCESS
						);
						context.lineTo(x + boxSize, y + LENGTH - EXCESS);
						context.stroke();
					}
				}
			}
		}

		function randDir(exclude?: number) {
			if (exclude == 1) return Math.random() < 0.5 ? -1 : 0;
			if (exclude == -1) return Math.random() < 0.5 ? 1 : 0;
			if (exclude == 0) return Math.random() < 0.5 ? -1 : 1;

			const rand = Math.random();
			if (rand < 0.33) return -1;
			else if (rand >= 0.66) return 1;
			else return 0;
		}

		setInterval(() => {
			updateWalls();
			draw();
		}, TICK);
	});
</script>

<canvas />

<style lang="scss">
	canvas {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
</style>
