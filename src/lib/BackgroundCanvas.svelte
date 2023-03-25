<script lang="ts">
	import { onMount } from "svelte";

	const color = "rgba(94, 52, 97, 0.3)";
	const CHANGEDUR = 3000; // ms
	const TICK = 100; // ms
	const STEP = TICK / CHANGEDUR;
	const BOXSIZE = 50;
	const LWIDTH = 5;

	let maxw = 0,
		maxh = 0,
		maxr = 0,
		maxc = 0;

	onMount(() => {
		let canvas = document.querySelector('canvas');
		let context: CanvasRenderingContext2D;
		let boxes = [];

		updateCanvas();

		window.onresize = () => {
			updateCanvas();
		};

		function updateCanvas() {
			getDims();
			canvas.width = maxw;
			canvas.height = maxh;
			context = canvas.getContext("2d");
			context.strokeStyle = color;
			context.lineWidth = LWIDTH;
			updateBoxes();
		}

		function updateBoxes() {
			boxes = [];
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
		}

		function getDims() {
			// const body = document.querySelector("body");
			// maxw = body.offsetWidth;
			// maxh = body.offsetHeight;
			maxw = window.innerWidth;
			maxh = window.innerHeight;
			maxr = Math.ceil(maxh / BOXSIZE);
			maxc = Math.ceil(maxw / BOXSIZE);
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
					let x = (c - 1) * BOXSIZE;
					let y = (r - 1) * BOXSIZE;

					let fracBottom = boxes[r][c][0].val;
					let fracRight = boxes[r][c][1].val;

					const LENGTH = BOXSIZE + LWIDTH;
					const EXCESS = LWIDTH / 2;

					// Bottom
					if (boxes[r][c][0].drawOutward) {
						context.beginPath();
						context.moveTo(x - EXCESS, y + BOXSIZE);
						context.lineTo(
							x + LENGTH * fracBottom - EXCESS,
							y + BOXSIZE
						);
						context.stroke();
					} else {
						context.beginPath();
						context.moveTo(
							x + LENGTH * fracBottom - EXCESS,
							y + BOXSIZE
						);
						context.lineTo(x + LENGTH - EXCESS, y + BOXSIZE);
						context.stroke();
					}

					// Right
					if (boxes[r][c][1].drawOutward) {
						context.beginPath();
						context.moveTo(x + BOXSIZE, y - EXCESS);
						context.lineTo(
							x + BOXSIZE,
							y + LENGTH * fracRight - EXCESS
						);
						context.stroke();
					} else {
						context.beginPath();
						context.moveTo(
							x + BOXSIZE,
							y + LENGTH * fracRight - EXCESS
						);
						context.lineTo(x + BOXSIZE, y + LENGTH - EXCESS);
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
		position: fixed;
		top: 0;
		left: 0;
		z-index: 0;
	}
</style>
