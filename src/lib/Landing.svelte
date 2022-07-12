<script lang="ts">
	import Button from "./Button.svelte";

    export let title = "Title";
    export let header = "Header Information Here";
    export let description = "Description Here";
</script>

<div class="landing">
	<div class="info">
		<span class="title">{title}</span>

		<h1>{header}</h1>

		<p>{description}</p>

		<div class="buttons">
			<Button display="outline">Get Started</Button>
			<Button>Learn More</Button>
		</div>
	</div>

	<div class="image">
		<img src="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg" alt="Logo" />
	</div>
</div>

<style lang="scss">
	@import "../Color";

	.landing {
	  display: flex;
	  width: 100%;
	  justify-content: center;
	  align-items: center;
	  border-bottom: 1px solid $dynamicLayer2;
	  margin-bottom: 50px;

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
		  gap: 20px;
		  display: flex;
		  flex-direction: column;
		  padding: 20px 0;

		  .buttons {
			display: flex;
			gap: 10px;
		  }

		  .title {
			color: $text2;
			text-transform: uppercase;
			font-size: 12px;
            margin: 0;
		  }

		  h1 {
			font-weight: 600;
			font-size: 50px;
			margin: 0;
		  }

		  p {
			color: $text2;
            margin: 0;
		  }
		}

		@media (max-width: 1080px) {
		  .info {
		  	h1 {
			  font-size: 40px;
			}
		  }
        }

	  @media (max-width: 980px) {
		flex-direction: column;

		.image {
		  display: none;
		}
      }
	}
</style>
