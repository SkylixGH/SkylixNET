<script lang="ts">
import { goto } from "$app/navigation";

    import Icon from "@iconify/svelte";
    import type LinkItem from "./LinkItem";

    export let items: LinkItem[];
</script>

<div class="link-array">
    {#each items as item, index}
        <button
            class="link"
            on:click={() => {
                if (item.href) {
                    goto(item.href);
                } else if (item.action) {
                    item.action();
                }
            }}
        >
            <div class="arrow">
                <Icon icon="lucide:arrow-right" />
            </div>
            
            <span>{ item.label }</span>
        </button>
    {/each}
</div>

<style lang="scss">
    @import "./Colors.scss";

    .link-array {
        display: flex;
        flex-direction: column;
        gap: $space1;

        button {
            color: $text1;
            font-size: 13px;
            text-decoration: none;
            transition: $transition;
            padding: $space2;
            border-radius: $radius2;
            display: flex;
            align-items: center;
            gap: $space2;
            background: transparent;
            border: none;
            cursor: pointer;

            .arrow {
                width: 15px;
                height: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: $transition;
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
