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
			<img src="/src/assets/headshot.jpg" alt="Personal Headshot" />
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
		margin: 20px 0px;
	}

	p {
		margin-top: 5vh;
	}

	.title {
		font-size: 4.5em;
	}

	.subtitle {
		font-size: 3em;
	}

	.body {
		font-size: 1.5em;
	}

	img {
		width: 100%;
		border-radius: 100%;
	}
</style>
