<script lang="ts">
    import type LinkItem from "./LinkItem";
    import Nav from "./infoPage/Nav.svelte";

    export let links: LinkItem[] = [];
    export let title = "Untitled";
    export let logo = "/logo/Logo.svg";
</script>

<div class="info-page">
    <Nav
        logo={logo}
        title={title}
        items={links}
    />

    <slot />
</div>

<style lang="scss">
    @import "Colors.scss";

    .info-page {
    }
</style>
