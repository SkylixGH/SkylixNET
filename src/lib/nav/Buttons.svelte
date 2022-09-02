<script lang="ts">
    import Icon from "@iconify/svelte";
    import Pop from "../Pop.svelte";
    import __global__ from "../../store/__global__";
    import Input from "../Input.svelte";
    import Text from "../Text.svelte";
    import LinksArray from "../LinksArray.svelte";

    let searchOpen = false;
    let languageSelectOpen = false;
    let mobileMenuOpen = false;
    export let mobile: boolean;

    interface Link {
        href: string;
        label: string;
    }

    export let links: Link[];
</script>

<div class="buttons">
    {#if !mobile}
        <button on:click={() => searchOpen = !searchOpen}>
            <Icon icon="lucide:search" />
        </button>

        <button on:click={() => languageSelectOpen = !languageSelectOpen}>
            <Icon icon="lucide:languages" />
        </button>

        <button class="text">Sign Up</button>
    {:else}
        <button on:click={() => mobileMenuOpen = !mobileMenuOpen} class="mobile-menu">
            <Icon icon="lucide:menu" />
        </button>
    {/if}

    <Pop
        open={mobileMenuOpen}
        onClose={() => mobileMenuOpen = false}
        top={50}
    >
        <Text>Search</Text>
        <Input placeholder="Search Query" />

        <Text>Navigation</Text>
        <LinksArray
            items={links}
        />
    </Pop>

    <Pop
        top={50}
        open={searchOpen}
        onClose={() => searchOpen = false}
    >
        <Text>Search</Text>
        <Input placeholder="Search Query" />
    </Pop>

    <Pop
        top={50}
        open={languageSelectOpen}
        onClose={() => languageSelectOpen = false}
    >
        <Text>Filter Languages</Text>
        <Input
            placeholder="Search for language"
        />

        <br />

        <Text>Select Language</Text>
        <LinksArray
            items={[
                {
                    // English
                    label: "English"
                },
                {
                    // Spanish
                    label: "Español"
                },
                {
                    // German
                    label: "Deutsch"
                },
                {
                    // French
                    label: "Français"
                },
                {
                    // Italian
                    label: "Italiano"
                },
                {
                    // Portuguese
                    label: "Português"
                },
                {
                    // Russian
                    label: "Русский"
                },
                {
                    // Chinese
                    label: "中文"
                }
            ]}
        />
    </Pop>
</div>

<style lang="scss">
    @import "../Colors.scss";

    .buttons {
        display: flex;
        gap: $space2;

        .mobile-menu {
            font-size: 15px;
        }

        button {
            height: 35px;
            min-width: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: $radius1;
            border: none;
            background: transparent;
            color: $text2;
            font-size: 14px;
            cursor: pointer;
            transition: $transition;

            &.text {
                padding: $space2;
            }

            &:hover {
                color: $brand2;
                background: $dynamic2;
            }
        }
    }
</style>
