<script lang="ts">
	import Icon from "@iconify/svelte";

    interface CardItem {
		title: string;
        icon: string;
        description: string;
	}

    export let cards: CardItem[];
</script>

<div class="featureCards">
	{#each cards as card}
		<div class="card">
			<div class="header">
				<div class="icon">
					{#if card.icon.startsWith("https://") || card.icon.startsWith("http://")}
						<img
							draggable="false"
							src="{card.icon}"
							alt="ER04"
						/>
					{:else}
						<Icon icon={card.icon} />
					{/if}
				</div>

				<span>{card.title}</span>
			</div>

			<span>{card.description}</span>
		</div>
	{/each}
</div>

<style lang="scss">
	@import "../Color";

	.featureCards {
	  display: flex;
	  gap: 10px;
	  flex-wrap: wrap;
	  justify-content: center;

	  .card {
		flex: 300px;
		background: $dynamicLayer1;
		border-radius: $radius2;
		max-width: 367px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		transition: $transition1;

		&:hover {
		  background: $brand2;
		  color: $brandText2;
		}

		.header {
		  display: flex;
		  gap: 10px;
		  align-items: center;

		  .icon {
			width: 50px;
			height: 50px;
			border-radius: $radius1;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			font-size: 30px;

			img {
			  width: 40px;
			}
		  }
		}
	  }
	}
</style>
