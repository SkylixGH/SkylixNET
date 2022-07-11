<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<div
		in:fly="{{ y: -50, duration: 100, delay: 100 }}"
		out:fly="{{ y: 50, duration: 100 }}"
>
	<slot />
</div>