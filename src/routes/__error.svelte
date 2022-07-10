<script context="module" lang="ts">
    export function load({ status }) {
        return {
            props: {
                title: `Error ${status}! :(`,
                code: status
            }
        };
    }
</script>

<script lang="ts">
    import { _ } from "svelte-i18n";

    export let title: string;
    export let code: number;

    let messageDisplay: string;

    switch (code) {
        case 404:
            messageDisplay = $_("__error.404");
            break;

        case 500:
            messageDisplay = $_("__error.500");
            break;

        default:
            messageDisplay = $_("__error.other");
            break;
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="error">
    <h1>{ code }</h1>
    <p>{ messageDisplay }</p>
</div>

<style lang="scss">
    @import "../Color";

    .error {
        width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>
