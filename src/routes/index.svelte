<script lang="ts">
    let name = "a";
</script>

<h1>Welcome to {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => name = "b"}>Change name</button>
