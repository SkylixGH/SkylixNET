<script lang="ts">
    import Input from "./Input.svelte";
    import Text from "./Text.svelte";

    interface ItemInput {
        type: "input";
        placeholder?: string;
        value?: string;
        title?: string;
    }

    interface ItemText {
        type: "text";
        value: string;
    }

    interface ItemBreak {
        type: "break";
    }

    type Item = 
        ItemInput  |
        ItemText   |
        ItemBreak;

    export let top = 0;
    export let right = 0;
    export let width = 400;

    export let items: Item[] = [];
</script>

<div 
    class="pop"
    style={`
        top: ${top}px;
        right: ${right}px;
        width: ${width}px;
    `}
>
    {#each items as item}
        {#if item.type === "text"}
            <Text 
                text={item.value}
            />
        {:else if item.type === "input"}
            <Input 
                placeholder={item.placeholder}
                title={item.title}
                value={item.value}
            />
        {:else if item.type === "break"}
            <div style="height: 5px"></div>
        {/if}
    {/each}
</div>

<style lang="scss">
    @import "Colors.scss";

    .pop {
        position: fixed;
        background: $solid2;
        min-height: 30px;
        min-width: 30px;
        border-radius: $radius2;
        padding: $space2;
        display: flex;
        flex-direction: column;
        gap: $space2;
        box-shadow: 0 0 10px -5px black;
    }
</style>
