<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<div class="buttons">
    <button>
        <Icon icon="lucide:search" />
    </button>

    <button>
        <Icon icon="lucide:languages" />
    </button>

    <button class="text">Sign Up</button>
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
