<script lang="ts">
    import __global__ from "../store/__global__";
    import Buttons from "./nav/Buttons.svelte";
    import Links from "./nav/Links.svelte";
    import Logo from "./nav/Logo.svelte";

    let mobile = true;

    __global__.windowSize.subscribe(ws => {
        if (ws.width > 900) mobile = false;
        else mobile = true;
    });

    let links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/devops', label: 'DevOps' },
        { href: '/devops/learn-programming', label: 'Learn Programming' },
    ];
</script>

<div class="nav">
    <div class="inner">
        <Logo />
        <Links mobile={mobile} links={links} />
        <Buttons mobile={mobile} links={links} />
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
        background: $solid1;
        outline: 1px solid $soft;
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
