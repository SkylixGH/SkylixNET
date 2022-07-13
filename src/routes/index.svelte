<script lang="ts">
    import Landing from "../lib/Landing.svelte";
    import PageView from "../lib/PageView.svelte";
    import Button from "../lib/Button.svelte";
</script>

<PageView>
	<Landing
			title="Skylix - Open Source and Comercial Software"
			header="Powering the world with Open Source"
			description="Skylix is a company that strives to create powerful commercial products and frameworks for completely free! We also offer many public premium services for online communication and MORE!"
	/>

	Welcome to the Skylix official homepage!<br />
	There isn't much going on here at the moment, check back later!

	<br />
	<br />

	<div>
		<Button display="outline">Discord</Button>
		<Button>Twitter</Button>
	</div>
</PageView>
