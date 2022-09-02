<script lang="ts">
    import Icon from "@iconify/svelte";

    interface Feature {
        title: string;
        description: string;
        imageOrIcon: string;
    }

    export let features: Feature[];
</script>

<div class="features">
    <div class="inner">
        {#each features as feature}
            <div class="item">
                <div class="header">
                    {#if 
                        feature.imageOrIcon.startsWith("https://") ||
                        feature.imageOrIcon.startsWith("http://")  ||
                        feature.imageOrIcon.startsWith("/")
                    }
                        <img
                            src={feature.imageOrIcon}
                            alt={"*"}
                            class="image"
                        />
                    {:else}
                        <Icon
                            icon={feature.imageOrIcon}
                        />
                    {/if}

                    <span class="title">{ feature.title }</span>
                </div>

                <span class="description">{ feature.description }</span>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    @import "Colors.scss";

    .features {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 $space3;
        padding-top: $space3;

        .inner {
            width: 100%;
            display: flex;
            gap: $space3;
            flex-wrap: wrap;
            justify-content: space-evenly;
            max-width: 1200px;

            .item {
                background: $dynamic1;
                flex: 1 1 300px;
                padding: $space2;
                border-radius: $radius2;
                overflow: hidden;
                transition: $transition;
                border: 1px solid transparent;

                &:hover {
                    background: transparent;
                    border-color: $soft;
                }

                .header {
                    display: flex;
                    width: 100%;
                    height: 30px;
                    align-items: center;
                    gap: $space2;
                    color: $brand2;
                    font-size: 16px;
                    margin-bottom: $space2;

                    .title {
                        font-size: 13px;
                        color: $text1;
                    }
                }

                .description {
                    color: $text1;
                    font-size: 13px;
                }
            }
        }
    }
</style>
