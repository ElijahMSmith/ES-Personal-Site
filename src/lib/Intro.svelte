<section id="intro">
	<div id="container">
		<div class="left">
			<h1 class="title">Elijah Smith</h1>
			<h1 class="subtitle">Full-Stack Developer</h1>
			<p class="body">
				Creative thinker, dedicated leader, problem-solver, and
				all-around code enthusiast.
			</p>
		</div>
		<div class="right">
			<div class="img-wrapper">
				<img src="images/headshot.jpg" alt="Personal Headshot" />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	section {
		height: 100vh;
	}

	#container {
		display: flex;
		width: 80%;
	}

	.left {
		flex: 6;
		padding-right: 10vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.right {
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	h1,
	p {
		color: $text-primary;
		margin: 0px;
	}

	p {
		margin-top: 5vh;
	}

	.title {
		font-size: 4.5em;
	}

	.subtitle {
		font-size: 2.5em;
		font-weight: 700;
	}

	.body {
		font-size: 1.5em;
	}

	img {
		width: 100%;
		border-radius: 100%;
		z-index: 2;
		position: relative;
	}

	.img-wrapper {
		$border-size: 10px;
		width: 30vw;
		max-width: 400px;
		height: 30vw;
		max-height: 400px;
		position: relative;
		border-radius: 100%;
		&::after {
			content: "";
			width: 100%;
			height: 100%;
			top: -$border-size;
			left: -$border-size;
			display: block;
			position: absolute;
			border-radius: 100%;
			border: $border-size dashed $bg-alternate;
			stroke-dashoffset: 100;
			z-index: 1;
			transition: all 0.3s linear;
			animation: spin 20s linear 0s infinite forwards;
		}

		&:hover {
			&::after {
				border-width: calc(2 * $border-size);
				left: calc(-2 * $border-size);
				top: calc(-2 * $border-size);
				animation-duration: 5s;
			}
		}
	}

	// Very large desktop
	@media only screen and (min-width: 1500px) {
		.title {
			font-size: 6em;
		}

		.subtitle {
			font-size: 3.8em;
		}

		.body {
			font-size: 2em;
		}

		img {
			max-width: 500px;
		}
	}
	@media only screen and (max-width: 1050px) {
		.title {
			font-size: 3em;
		}

		.subtitle {
			font-size: 2em;
		}

		.body {
			font-size: 1.2em;
		}
	}

	// Phone or very small
	@media only screen and (max-width: 800px) {
		#container {
			width: 80%;
			flex-direction: column;
		}

		.left {
			align-items: center;
			padding: 0px;
			text-align: center;
		}

		.img-wrapper {
			height: 60vw;
			width: 60vw;
			max-height: 250px;
			max-width: 250px;
		}

		.right {
			margin-top: 5vh;
		}
	}

	@media only screen and (max-width: 350px) {
		.title {
			font-size: 2em;
		}

		.subtitle {
			font-size: 1.4em;
		}

		.body {
			font-size: 1em;
		}
	}
</style>
