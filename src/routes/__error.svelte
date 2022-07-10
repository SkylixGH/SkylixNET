<script context="module" lang="ts">
    export function load({ status }) {
        return {
            props: {
                title: `Error ${status}! :(`
            }
        };
    }
</script>

<script lang="ts">
    export let title;
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>