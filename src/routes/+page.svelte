<script lang="ts">
import Pop from "../lib/Pop.svelte";

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Pop top={60} right={145} width={400} items={[
    {
        title: "Search for anything",
        type: "input",
        placeholder: "Search for keywords"
    },
    // {
    //     type: "input",
    //     title: "Search with user",
    //     placeholder: "Search by user"
    // }
]} />
