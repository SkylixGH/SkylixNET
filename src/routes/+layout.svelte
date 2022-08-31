<script>
    import Nav from "../lib/Nav.svelte";
    import __global__ from "../store/__global__";

    if (typeof window != "undefined")
        window.addEventListener("mousemove", (e) => {
            __global__.mouseX.set(e.clientX);
            __global__.mouseY.set(e.clientY);
            __global__.mouseRight.set(window.innerWidth - e.clientX);
            __global__.mouseTop.set(e.clientY);

            console.log(`[debug] mouseX: ${e.clientX} mouseY: ${e.clientY} mouseRight: ${window.innerWidth - e.clientX} mouseTop: ${e.clientY}`);
        });
</script>
<Nav />

<slot />
