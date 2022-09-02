<script lang="ts">
    import Icon from "@iconify/svelte";
    import type LinkItem from "./LinkItem";

    export let items: LinkItem[];
</script>

<div class="link-array">
    {#each items as item, index}
        <a
            href={ item.href }
            class="link"
        >
            <div class="arrow">
                <Icon icon="lucide:arrow-right" />
            </div>
            
            <span>{ item.label }</span>
        </a>
    {/each}
</div>

<style lang="scss">
    @import "./Colors.scss";

    .link-array {
        display: flex;
        flex-direction: column;
        gap: $space1;

        a {
            color: $text1;
            font-size: 13px;
            text-decoration: none;
            transition: $transition;
            padding: $space2;
            border-radius: $radius1;
            display: flex;
            align-items: center;
            gap: $space2;

            .arrow {
                width: 15px;
                height: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &:hover {
                color: $text2;
                background: $dynamic2;

                .arrow {
                    color: $brand2;
                }
            }
        }
    }
</style>
