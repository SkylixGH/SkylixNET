<script lang="ts">
    import type LinkItem from "./LinkItem";
    import Nav from "./infoPage/Nav.svelte";

    export let links: LinkItem[] = [];
    export let title = "Untitled";
    export let logo = "/logo/Logo.svg";

    interface Banner {
        text: string;
        subText: string;
        image?: string;
    }

    export let banner: Banner | false = false;
</script>

<div class="info-page">
    <Nav
        logo={logo}
        title={title}
        items={links}
    />

    {#if banner != false}
        <div class="banner">
            {#if banner.image != undefined}
                <img 
                    src={ banner.image }
                    alt="..."
                    class="image"
                />
            {/if}

            <div class="text-layer">
                <h1>{ banner.text }</h1>
                <span>{ banner.subText }</span>
            </div>
        </div>
    {/if}
    
    <div class="body">
        <slot />
    </div>
</div>

<style lang="scss">
    @import "Colors.scss";

    .info-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;

        .body {
            width: 100%;
            max-width: 1500px;
            display: flex;
            flex-direction: column;
            margin-top: $space3;
            
            @media (max-width: 1540px) {
                padding-left: $space3;
                padding-right: $space3;
            }
        }

        .banner {
            width: 100%;
            height: 300px;
            display: flex;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            position: relative;
            border-bottom: 1px solid $soft;

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                filter: blur(0px) opacity(0.1);
            }

            .text-layer {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: $space3;
                flex-direction: column;
                position: absolute;

                h1 {
                    color: $brand2;
                    text-transform: uppercase;
                    font-weight: 400;
                    letter-spacing: $space2;
                    font-size: 60px;
                    margin: 0;
                }

                span {
                    color: $text1;
                    font-size: 13px;
                    margin: 0;
                }
            }
        }
    }
</style>
