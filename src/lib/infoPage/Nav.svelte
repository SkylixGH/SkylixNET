<script lang="ts">
    export let logo: string;
    export let title: string;
</script>

<div class="nav">
    <div class="inner">
        <div class="info">
            <img
                src={logo}
                alt={"..."}
                class="nav-logo"
            />
    
            <span>{ title }</span>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../Colors.scss";

    .nav {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $solid2;
        padding: $space3;

        .inner {
            width: 100%;
            max-width: 1500px;

            .info {
                display: flex;
                align-items: center;
                gap: $space2;

                img {
                    height: 40px;
                    width: 40px;
                }

                span {
                    color: $text1;
                    font-size: 13px;
                }
            }
        }
    }
</style>
