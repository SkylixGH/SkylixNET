<script lang="ts">
    import type LinkItem from "../LinkItem";
    import Icon from "@iconify/svelte";
    import Pop from "../Pop.svelte";
    import Text from "../Text.svelte";
    import LinksArray from "../LinksArray.svelte";

    export let logo: string;
    export let title: string;
    export let items: LinkItem[];

    let menuOpen = false;
</script>

<div class="nav">
    <div class="inner">
        <div class="info">
            <img
                src={logo}
                alt={"..."}
                class="nav-logo"
            />
    
            <span>{ title }</span>
        </div>

        <div class="links">
            {#each items as item, index}
                <a
                    href={ item.href }
                    class="link"
                >{ item.label }</a>

                {#if index < items.length - 1}
                    <span class="divider" />
                {/if}
            {/each}
        </div>

        <button 
            class="menu"
            on:click={() => menuOpen = !menuOpen}
        >
            <Icon icon="lucide:menu" />
        </button>
    </div>

    <Pop
        open={menuOpen}
        onClose={() => menuOpen = false}
    >
        <Text>Navigate</Text>
        <LinksArray
            items={items}
        />
    </Pop>
</div>

<style lang="scss">
    @import "../Colors.scss";

    .nav {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $solid2;
        padding: $space3;

        .inner {
            width: 100%;
            max-width: 1500px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .info {
                display: flex;
                align-items: center;
                gap: $space2;

                img {
                    height: 40px;
                    width: 40px;
                }

                span {
                    color: $text1;
                    font-size: 13px;
                }
            }

            .links {
                display: flex;
                gap: $space2;
                display: flex;
                align-items: center;

                .divider {
                    display: flex;
                    width: 3px;
                    height: 3px;
                    border-radius: 100%;
                    background: $text1;
                }

                a {
                    color: $text1;
                    font-size: 13px;
                    text-decoration: none;
                    transition: $transition;
                    padding: $space2;

                    &:hover {
                        color: $text2;
                    }
                }

                @media (max-width: 900px) {
                    display: none;
                }
            }

            .menu {
                border: none;
                background: transparent;
                color: $text2;
                font-size: 15px;
                transition: $transition;
                width: 35px;
                height: 35px;
                border-radius: $radius1;
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover {
                    cursor: pointer;
                    background: $dynamic2;
                }

                @media (min-width: 900px) {
                    display: none;
                }
            }
        }
    }
</style>
 