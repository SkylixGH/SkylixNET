<script lang="ts">
    import {onMount} from "svelte";

    export let text = "Default text";
    export let style: "text"
        | "outline" = "text";
</script>

<button class={"button " +
    `style${style.charAt(0).toUpperCase() + style.slice(1)}`}
>
	<span class="invisibleText">{text}</span>

	<div class="sheetCover"></div>
	<span class="text">{text}</span>

	{#if style === "outline"}
		<span class="textOverlay">{text}</span>
	{/if}
</button>

<style lang="scss">
    @import "../../Color";

    .button {
      padding: 0 20px;
      height: 30px;
      border: none;
      border-radius: $radius2;
      transition: $transition1;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 11px;
        text-transform: uppercase;
	  position: relative;

	  .invisibleText {
		opacity: 0;
	  }

      &.styleText {
        background: transparent;
        color: $text2;

		.text {
		  position: absolute;
		  top: 50%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		}

        &:hover {
          color: $text3;
          background: $dynamicLayer1;
        }
      }

      &.styleOutline {
        background: linear-gradient(80deg, $brand1, $brand2);
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
          background: -webkit-linear-gradient(80deg, $brand1, $brand2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
		  transition: $transition1;
		}

		.textOverlay {
		  opacity: 0;
		  color: $brandText2;
          -webkit-background-clip: initial;
          -webkit-text-fill-color: initial;
		  background: transparent;
        }

        &:hover {
          .sheetCover {
			opacity: 0;
			transform: scale(0.9);
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
