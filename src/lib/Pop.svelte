<script lang="ts">
import __global__ from "../store/__global__";

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

    export let top: number | false = false;
    export let right: number | false = false;

    let topComp = 30;
    let rightComp = 30;

    export let width = 400;
    export let open = false;

    export let items: Item[] = [];

    if (top != false) topComp = top;
    if (right != false) rightComp = right;

    __global__.mouseRight.subscribe(mr => {
        if (right != false) rightComp = right;
        
        if (open) return;
        rightComp = mr;
    });

    __global__.mouseTop.subscribe(mt => {
        if (top != false) topComp = top;

        if (open) return;
        topComp = mt;
    });
</script>

<div 
    class="pop"
    style={`
        top: ${topComp}px;
        right: ${rightComp}px;
        width: ${width}px;
        opacity: ${open ? 1 : 0};
        pointer-events: ${open ? "all" : "none"};
        transform: scale(${open ? 1 : 0.9});
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
        transition: $transition;
        gap: $space2;
        box-shadow: 
            0 0 10px -5px black,
            0 0 30px -15px black,
    }
</style>
