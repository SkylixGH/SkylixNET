<script lang="ts">
    import __global__ from "../store/__global__";

    export let top: number | false = false;
    export let right: number | false = false;
    export let onClose: () => void;

    let topComp = __global__.mouseTop__;
    let rightComp = __global__.mouseRight__;
    let leftComp = __global__.mouseX__;

    let forcedRight: number | false = false;

    function getRight() {
        return right != false ? right : rightComp;
    }

    function getTop() {
        return top != false ? top : topComp;
    }

    let compiledTop = 0;
    let compiledRight = 0;

    function setCompiledTop() {
        compiledTop = getTop();
    }

    function setCompiledRight() {
        if (forcedRight != false) compiledRight = forcedRight;
        else compiledRight = getRight();
    }

    let mouseOverPop = false;
    let windowWidth = typeof window != "undefined" ? window.innerWidth : 0;

    export let width = 400;
    export let open = false;

    if (!open) onClose();

    function handleLeftComputed() {
        leftComp = windowWidth - width - rightComp;

        if (leftComp < 20) {
            forcedRight = windowWidth - width - 20;
        } else {
            forcedRight = false;
        }

        topComp = __global__.mouseTop__;
        rightComp = __global__.mouseRight__;

        setCompiledRight();
        setCompiledTop();
    }

    __global__.mouseRight.subscribe(mr => {
        if (right != false) rightComp = right;
        
        if (!open) return;
        rightComp = mr;
    });

    __global__.mouseTop.subscribe(mt => {
        if (top != false) topComp = top;

        if (open) return;
        topComp = mt;
    });

    __global__.mouseLeftBtnDown.subscribe(lDown => {
        if (!mouseOverPop && lDown) {
            onClose();
        }
    });

    __global__.windowSize.subscribe((size) => {
        windowWidth = size.width;
        handleLeftComputed();
    });
</script>

<div 
    class="pop"
    
    on:mouseenter={() => { mouseOverPop = true; }}
    on:mouseleave={() => { mouseOverPop = false; }}

    style={`
        ${(() => { __global__.dispatchAll(); return ""; })()}
        top: ${(() => { setCompiledTop(); return ""; } )()} ${compiledTop}px;
        right: ${(() => { setCompiledRight(); return ""; } )()} ${compiledRight}px;
        width: ${width}px;
        opacity: ${open ? 1 : 0};
        pointer-events: ${open ? "all" : "none"};
        transform: scale(${open ? 1 : 0.9});
    `}
>
    <slot />
</div>

<style lang="scss">
    @import "Colors.scss";

    .pop {
        position: fixed;
        background: $solid1;
        min-height: 30px;
        min-width: 30px;
        border-radius: $radius2;
        padding: $space2;
        display: flex;
        flex-direction: column;
        transition: $transition;
        gap: $space2;
        border: 1px solid $soft;
        box-shadow: 
            0 0 10px -5px black,
            0 0 30px -10px #000000ab;
        z-index: 2147483647;
    }
</style>
