<script lang="ts">
    export let rowAlign: "center" | "right" | "left" = "center";
	export let columnAlign: "center" | "right" | "left" = "center";
	export let height = "initial";
	export let width = "initial";
</script>

<div
        class="flex"
        style={[
            "justify-content: " + rowAlign,
            "align-items: " + columnAlign,
            "height: " + height,
            "width: " + width,
        ].join("; ")}
>
    <slot />
</div>

<style lang="scss">
    .flex {
        display: flex;
    }
</style>
