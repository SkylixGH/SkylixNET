<script lang="ts">
    import {goto} from "$app/navigation";

    interface Card {
        title: string;
        description: string;
        image: string;
        url: string;
	}

    export let cards: Card[];
</script>

<div class="cards">
	{#each cards as card}
		<div class="card" on:click={() => {
            goto(card.url);
		}}>
			<div class="banner">
				<img
					src={card.image}
					draggable="false"
					alt={card.title}
					class="background"
				/>

				<img
						src={card.image}
						draggable="false"
						alt={card.title}
						class="showIcon"
				/>
			</div>

			<span class="title">{card.title}</span>
			<p>{card.description}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	@import "../Color";

	.cards {
		display: flex;
	  		flex-wrap: wrap;
	  padding: 20px 0;
	  gap: 10px;
		justify-content: center;

	  .card {
		flex: 300px;
		  width: 100%;
		overflow: hidden;
		max-width: 300px;
		background: $dynamicLayer1;
		cursor: pointer;
		border-radius: $radius2;
		display: flex;
		gap: 10px;
		flex-direction: column;
		padding: 10px;
		transition: $transition1;

		.banner {
		  height: 150px;
		  background: $layer2;
		  margin: -10px -10px 0 -10px;
		  display: flex;
		  align-items: center;
			justify-content: center;
		  overflow: hidden;
			position: relative;

			img {
				position: absolute;

				&.showIcon {
				transition: $transition1;
					width: 25%;
				}

				&.background {
					min-width: 100%;
					transition: $transition3;
					min-height: 100%;
					filter: blur(20px) opacity(0.5);
				}
			}
		}

		.title {
		  font-size: 12px;
		  color: $text2;
		}

		&:hover {
		  background: $dynamicLayer2;

		  .banner > .showIcon {
			transform: scale(1.2);
		  }

			.banner > .background {
				transform: scale(1.2);
			}
		}
	  }
	}
</style>
