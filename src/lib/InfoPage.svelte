<script lang="ts">
    import Nav from "./infoPage/Nav.svelte";

    export let title = "Untitled";
    export let logo = "/logo/Logo.svg";
</script>

<div class="info-page">
    <Nav
        logo={logo}
        title={title}
    />
    hi lol

    <br />
    <br />
    <br />

    Hi lol

    <br />
    <br />
    <br />

    Hi lol

    <br />
    <br />
    <br />

    Hi lol

    <div class="t" style="height: 200vh;"></div>

</div>

<style lang="scss">
    @import "Colors.scss";

    .info-page {
    }
</style>
