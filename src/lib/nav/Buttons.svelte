<script lang="ts">
    import Icon from "@iconify/svelte";
    import Pop from "../Pop.svelte";
    import __global__ from "../../store/__global__";

    let searchOpen = false;
    let languageSelectOpen = false;
</script>

<div class="buttons">
    <button on:click={() => searchOpen = !searchOpen}>
        <Icon icon="lucide:search" />
    </button>

    <button on:click={() => languageSelectOpen = !languageSelectOpen}>
        <Icon icon="lucide:languages" />
    </button>

    <button class="text">Sign Up</button>

    <Pop
        top={60}
        open={searchOpen}
        onClose={() => searchOpen = false}
        items={[
            {
                type: "input",
                title: "Search",
                placeholder: "Search for anything!"
            }
        ]}
    />

    <Pop
        top={60}
        open={languageSelectOpen}
        onClose={() => languageSelectOpen = false}
        items={[
            {
                type: "input",
                title: "Search for language",
                placeholder: "Search for any language!"
            }
        ]}
    />
</div>

<style lang="scss">
    @import "../Colors.scss";

    .buttons {
        display: flex;
        gap: $space2;

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
