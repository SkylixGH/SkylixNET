<script lang="ts">
    import NavBar from "../lib/NavBar.svelte";
    import Footer from "../lib/Footer.svelte";
    import { waitLocale } from "svelte-i18n";
    import "../locale/i18n";

    export async function preload() {
        return waitLocale();
    }
</script>

<div class="root">
    <NavBar />

    <div class="main">
        <slot></slot>
    </div>

    <Footer />
</div>

<svelte:head>
    <link rel="icon" href="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoAuto.svg">
</svelte:head>

<style lang="scss">
@import "../Color";

.root {
    background: $layer1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .main {
        height: 100%;
        color: $text3;
        margin-top: 70px;
    }
}
</style>
