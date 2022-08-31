<script lang="ts">
    interface Links {
        href: string;
        label: string;
    }

    const links: Links[] = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/products', label: 'Products' },
        { href: '/docs', label: 'Documentation' },
        { href: '/learn-to-code', label: 'Learn Programming' },
    ];
</script>

<div class="links">
    {#each links as {href, label}, index}
        <a href={href}>{label}</a>
 
        {#if index < links.length - 1}
            <span class="divider" />
        {/if}
    {/each}
</div>

<style lang="scss">
    @import "../Colors.scss";
 
    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: $space2;
        gap: $space1;

        a {
            color: $text1;
            font-size: 13px;
            text-decoration: none;
            transition: $transition;
            padding: $space1;
            position: relative;
            
            &:after {
                content: '';
                transform: translateY(5px);
                position: absolute;
                width: calc(100% - ($space2 * 2));
                border-radius: $radius2;
                height: 3px;
                transition: $transition;
                bottom: -3px;
                left: calc($space1 * 2);
            }

            &:hover {
                color: $brand2;

                &:after {
                    background: $brand2;
                    transform: translate(0);
                }
            }
        }

        .divider {
            content: '';
            display: inline-block;
            width: 3px;
            height: 3px;
            background: $text1;
            border-radius: 50%;
        }
    }
</style>
