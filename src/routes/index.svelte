<script lang="ts">
    import Landing from "../lib/Landing.svelte";
    import PageView from "../lib/PageView.svelte";
    import Button from "../lib/Button.svelte";
    import FeatureCards from "../lib/FeatureCards.svelte";
</script>

<PageView title="Skylix">
	<Landing
			title="Skylix - Open Source and Comercial Software"
			header="Powering the world with Open Source"
			description="Skylix is a company that strives to create powerful commercial products and frameworks for completely free! We also offer many public premium services for online communication and MORE!"
	/>

	<img alt="hi" />
</PageView>

<style lang="scss">
	img {
		image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
		image-rendering: -moz-crisp-edges;          /* Firefox                        */
		image-rendering: -o-crisp-edges;            /* Opera                          */
		image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
		image-rendering: pixelated; /* Chrome */
		image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
		-ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */
	}
</style>
