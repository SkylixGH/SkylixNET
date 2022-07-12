<script lang="ts">
    export let display: "text"
        | "outline" = "text";
</script>

<button class={"button " +
    `style${display.charAt(0).toUpperCase() + display.slice(1)}`}
>
	<span class="invisibleText">
		<slot />
	</span>

	<div class="sheetCover"></div>
	<span class="text">
		<slot />
	</span>

	{#if display === "outline"}
		<span class="textOverlay">
			<slot />
		</span>
	{/if}
</button>

<style lang="scss">
    @import "../Color";

    .button {
      padding: 0 20px;
      height: 30px;
      border: none;
      border-radius: $radius2;
      transition: $transition1;
      cursor: pointer;
      letter-spacing: 1px;
      font-size: 12px;
        text-transform: uppercase;
	  position: relative;
		font-weight: 600;

	  .invisibleText {
		opacity: 0;
		  font-size: 12px;
        white-space: nowrap;
	  }

      &.styleText {
        background: transparent;
        color: $text2;

		.text {
		  position: absolute;
		  top: 50%;
		  left: 50%;
		  transform: translate(-50%, -50%);
          white-space: nowrap;
		}

        &:hover {
          color: $text3;
          background: $dynamicLayer1;
        }
      }

      &.styleOutline {
        background: linear-gradient(80deg, $brand2, $brand2);
        color: $brandText2;

        .sheetCover {
		  position: absolute;
		  top: 2px;
		  left: 2px;
		  width: calc(100% - 4px);
		  height: calc(100% - 4px);
		  background: $layer1;
		  border-radius: calc($radius2 / 1.5);
		  transition: $transition1;
		}

        .text, .textOverlay {
		  position: absolute;
          top: 50%;
          left: 50%;
		  transform: translate(-50%, -50%);
          background: -webkit-linear-gradient(80deg, $brand2, $brand2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
		  transition: $transition1;
          white-space: nowrap;
		}

		.textOverlay {
		  opacity: 0;
		  color: $brandText2;
          -webkit-background-clip: initial;
          -webkit-text-fill-color: initial;
		  background: transparent;
		  white-spacing: nowrap;
        }

        &:hover {
          .sheetCover {
			opacity: 0;
			transform: scale(0.5);
		  }

          .text {
            opacity: 0;
		  }

		  .textOverlay {
			opacity: 1;
		  }
        }
      }
    }
</style>
