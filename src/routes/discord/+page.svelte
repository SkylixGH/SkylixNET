<button
    on:click={() => {
        window.location.href = "https://discord.gg/wtYw7GRfNF";
    }}
>Join SKYLIX Discord Server</button>

<style lang="scss">
    @import "../../lib/Colors.scss";

    button {
        border: 1px solid transparent;
        color: $text1;
        background: transparent;
        transition: $transition;
        padding: $space2;
        border-radius: $radius1;
        margin: $space3;

        &:hover {
            cursor: pointer;
            color: $brand2;
            background: $dynamic2;
        }
    }
</style>
