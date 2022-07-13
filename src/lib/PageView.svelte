<script lang="ts">
	import { fly } from "svelte/transition";

    export let title: string;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div
		class="pageView"
		in:fly="{{ y: -50, duration: 100, delay: 100 }}"
		out:fly="{{ y: 50, duration: 100 }}"
>
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	.pageView {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	  	padding: 0 40px;
	  display: flex;
	  justify-content: center;
	  width: 100%;

	  .inner {
		width: 100%;
		max-width: 1500px;
	  }
	}
</style>