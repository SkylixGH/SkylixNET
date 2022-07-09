<script>
    import NavBar from "../lib/NavBar.svelte";

    let p = 0;
    setInterval(() => {
        if (p > 100) {
            p = 100;
        }

        p += 10;
    }, 100);
</script>

<div class="root">
    <NavBar progress={p} />

    <div class="view">
        <div class="main">
            <slot />
        </div>

        FOOTER
    </div>
</div>

<style lang="scss">
  @import "../conf/Color";

  .root {
    background: $l2;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: $t4;

    .view {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;

      .main {
        height: 100%;
      }
    }
  }
</style>
