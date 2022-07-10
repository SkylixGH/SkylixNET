<script lang="ts">
	export let title = "Title";
    export let header = "Header Information Here";
    export let description = "Description Here";
</script>

<div class="landing">
	<div class="inner">
		<div class="info">
			<span class="title">{title}</span>

			<h1>{header}</h1>

			<p>{description}</p>
		</div>

		<div class="image">
			<img src="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg" alt="Logo" />
		</div>
	</div>
</div>

<style lang="scss">
	@import "../Color";

	.landing {
	  display: flex;
	  width: 100%;
	  justify-content: center;
	  align-items: center;
	  padding: 20px 0;

	  .inner {
        display: flex;
        flex-direction: row;
		max-width: 1500px;
		width: 100%;
		margin: 0 40px;
		gap: 20px;
		justify-content: space-between;

		.info, .image {
		  width: 100%;
		}

		.image {
		  display: flex;
		  overflow: hidden;
		  align-items: center;
		  justify-content: center;
		}

		.info {
		  max-width: 500px;

		  .title {
			color: $text2;
			text-transform: uppercase;
			font-size: 11px;
		  }

		  h1 {
			font-weight: 600;
			font-size: 50px;
		  }

		  p {
			color: $text2;
		  }
		}

		@media (max-width: 1100px) {
		  justify-content: center;

		  .image {
			display: none;
		  }
		}
	  }
	}
</style>
