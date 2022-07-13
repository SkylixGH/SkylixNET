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

	<FeatureCards />
</PageView>
