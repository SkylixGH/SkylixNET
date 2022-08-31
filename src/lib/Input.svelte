<script lang="ts">
    export let placeholder = "";
    export let title = "";
    export let value = "";
</script>

<div class="input">
    <span class="title">{title}</span>

    <label class="body">
        <input type="text" placeholder={placeholder} value={value} />
    </label>
</div>

<style lang="scss">
    @import "Colors.scss";

    .input {
        .title {
            font-size: 13px;
            color: $text1;
        }

        .body {
            margin-top: $space1;
            border-bottom: 2px solid $dynamic2;
            border-radius: $radius1;
            background: $dynamic2;
            height: 32px;
            overflow: hidden;
            display: flex;
            transition: $transition;

            input {
                flex: 1;
                background: transparent;
                color: $text2;
                border: none;
                outline: none;
                font-size: 13px;
                padding: $space2;
            }

            &:hover {
                background: $dynamic3;
            }

            &:focus-within {
                border-color: $brand2;
                background: $dynamic2;
            }
        }
    }
</style>
