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
	import PageView from "../lib/PageView.svelte";

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

<PageView title={"Error " + code}>
    <div class="error">
        <h1>{ code }</h1>
        <span></span>
        <p>{ messageDisplay }</p>
    </div>
</PageView>

<style lang="scss">
    @import "../Color";

    .error {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
        position: relative;

        h1 {
            background: -webkit-linear-gradient(80deg, $brand2, $brand2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          font-weight: 600;
        }

        span {
            display: flex;
            width: 1px;
            height: 80px;
            background: $dynamicLayer2;
        }

        p {
            font-size: 15px;
        }
    }
</style>
