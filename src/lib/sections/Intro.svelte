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
			<img src="/headshot.jpg" alt="Personal Headshot" />
		</div>
	</div>
</section>

<style lang="scss">
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
		max-width: 400px;
		width: 100%;
		border-radius: 100%;
	}

	// Phone or very small
	@media only screen and (max-width: 750px) {
		#container {
			width: 80%;
			flex-direction: column;
		}

		.left {
			align-items: center;
			padding: 0px;
			text-align: center;
		}

		.right {
			margin-top: 5vh;
		}

		img {
			width: 70%;
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
</style>
