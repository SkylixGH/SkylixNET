<script>
    import Nav from "../lib/Nav.svelte";
    import __global__ from "../store/__global__";
    import Footer from "../lib/Footer.svelte";

    let docReady = false;

    if (typeof window != "undefined") {
        window.addEventListener("mousemove", (e) => {
            __global__.mouseX.set(e.clientX);
            __global__.mouseY.set(e.clientY);
            __global__.mouseRight.set(window.innerWidth - e.clientX);
            __global__.mouseTop.set(e.clientY);

            __global__.mouseTop__ = e.clientY;
            __global__.mouseRight__ = window.innerWidth - e.clientX;

            __global__.mouseX__ = e.clientX;
            __global__.mouseY__ = e.clientY;
        });

        window.addEventListener("mousedown", (e) => {
            if (e.button == 0) {
                __global__.mouseLeftBtnDown.set(true);
                __global__.mouseLeftBtnDown__ = true;
            } else if (e.button == 2) {
                __global__.mouseRightBtnDown.set(true);
                __global__.mouseRightBtnDown__ = true;
            }
        });
        
        window.addEventListener("mouseup", (e) => {
            if (e.button == 0) {
                __global__.mouseLeftBtnDown.set(false);
                __global__.mouseLeftBtnDown__ = false;
            } else if (e.button == 2) {
                __global__.mouseRightBtnDown.set(false);
                __global__.mouseRightBtnDown__ = false;
            }
        });

        window.addEventListener("resize", () => {
            __global__.windowSize.set({
                width: document.body.clientWidth,
                height: document.body.clientHeight
            });
        });

        // on window ready
        if (document.readyState === "complete") {
            docReady = true;
        } else {
            document.addEventListener("readystatechange", () => {
                if (document.readyState === "complete") {
                    docReady = true;
                }
            });
        }
    }
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href="/logo/Logo.svg" />

    <title>S K Y L I X</title>
    <meta content="S K Y L I X" property="og:title" />
    <meta content="Skylix: Online social media platform and open source development" property="og:description" />
    <meta content="#ff556e" data-react-helmet="true" name="theme-color" />
</svelte:head>

<div class="root">
    <div class="content">
        <slot />
    </div>

    <Footer />
</div>

<Nav />

<div class={`loader ${docReady ? 'ready' : ''}`}>
    <img src="/logo/Logo.svg" alt="... Loading ..." />
</div>

<style lang="scss">
    @import "../lib/Colors.scss";

    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: $solid1;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        &.ready {
            opacity: 0;
            pointer-events: none;
        }

        @keyframes size {
            0% {
                transform: scale(0.9);
            }

            50% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(0.9);
            }
        }

        img {
            width: 150px;
            animation: size 3s infinite;
        }
    }
    
    .root {
        height: 100vh;
        width: 100vw;

        .content {
            min-height: calc(100% - 60px);
            margin-bottom: $space3;
        }
    }
</style>
