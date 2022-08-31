<script lang="ts">
    import Buttons from "./nav/Buttons.svelte";
    import Links from "./nav/Links.svelte";
    import Logo from "./nav/Logo.svelte";
    import Sidebar from "./nav/Sidebar.svelte";
</script>

<div class="nav">
    <div class="inner">
        <Logo />
        <Links />
        <Buttons />

        <Sidebar />
    </div>
</div>

<style lang="scss">
    @import "Colors.scss";

    .nav {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 60px;
        backdrop-filter: blur(10px);
        align-items: center;
        justify-content: center;
        padding: $space3;

        .inner {
            width: 100%;
            max-width: 1500px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>
