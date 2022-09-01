<script>
    import Nav from "../lib/Nav.svelte";
    import __global__ from "../store/__global__";

    if (typeof window != "undefined") {
        window.addEventListener("mousemove", (e) => {
            __global__.mouseX.set(e.clientX);
            __global__.mouseY.set(e.clientY);
            __global__.mouseRight.set(window.innerWidth - e.clientX);
            __global__.mouseTop.set(e.clientY);
        });

        window.addEventListener("mousedown", (e) => {
            if (e.button == 0) {
                __global__.mouseLeftBtnDown.set(true);
            } else if (e.button == 2) {
                __global__.mouseRightBtnDown.set(true);
            }
        });
        
        window.addEventListener("mouseup", (e) => {
            if (e.button == 0) {
                __global__.mouseLeftBtnDown.set(false);
            } else if (e.button == 2) {
                __global__.mouseRightBtnDown.set(false);
            }
        });

        window.addEventListener("resize", () => {
            __global__.windowSize.set({
                width: document.body.clientWidth,
                height: document.body.clientHeight
            });
        });
    }
</script>
<Nav />

<slot />
