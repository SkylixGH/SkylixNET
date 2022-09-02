<script lang="ts">
    import Text from "./Text.svelte";
    import LinksArray from "./LinksArray.svelte";
</script>

<div class="footer">
    <div class="header">
        <div class="data">
            HII
        </div>
    </div>

    <div class="inner">
        <div class="block">
            <Text>Quick Navigation</Text>
            
            <hr />

            <LinksArray 
                items={[
                    {
                        label: "Home",
                        href: "/"
                    },
                    {
                        label: "About",
                        href: "/about"
                    },
                    {
                        label: "DevOps",
                        href: "/devops"
                    },
                    {
                        label: "Learn Programming",
                        href: "/devops/learn-programming"
                    },
                    {
                        label: "Parental Controls",
                        href: "/safety/parental-controls"
                    },
                    {
                        label: "My Account",
                        href: "/account"
                    }
                ]}
            />
        </div>

        <div class="block">
            <Text>Going Deeper</Text>

            <hr />

            <LinksArray
                items={[
                    {
                        label: "DMCA Takedown Request",
                        href: "/dmca/takedown"
                    },
                    {
                        label: "DMCA Policy Information",
                        href: "/dmca/policy"
                    },
                    {
                        label: "Report User Account",
                        href: "/report"
                    },
                    {
                        label: "Search",
                        href: "/search"
                    },
                    {
                        label: "Trust and Safety",
                        href: "/safety/"
                    },
                    {
                        label: "Support Center",
                        href: "/support"
                    }
                ]}
            />
        </div>

        <div class="block">
            <Text>Other</Text>

            <hr />

            <LinksArray
                items={[
                    {
                        label: "Shop",
                        href: "/shop"
                    },
                    {
                        label: "Pricing and Plans",
                        href: "/pricing"
                    },
                    {
                        label: "API Service",
                        href: "/devops/Skylix/APIInterface/wiki"
                    },
                    {
                        label: "Status",
                        href: "/status"
                    },
                    {
                        label: "Get Involved",
                        href: "/get-involved"
                    },
                    {
                        label: "Blog",
                        href: "/blog"
                    }
                ]}
            />
        </div>

        <div class="block">
            <Text>Legal</Text>

            <hr />

            <LinksArray
                items={[
                    {
                        label: "Terms of Service",
                        href: "/legal/tos"
                    },
                    {
                        label: "Privacy Policy",
                        href: "/legal/privacy"
                    }
                ]}
            />
        </div>
    </div>

    <div class="copyright">
        <div class="data">
            <span>Copyright © 2018 - (NOW) Skylix</span>
        </div>
    </div>
</div>

<style lang="scss">
    @import "Colors.scss";

    .footer {
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 $space3;
        flex-direction: column;

        .inner {
            width: 100%;
            max-width: 1500px;
            display: flex;
            justify-content: center;
            gap: $space3;
            flex-wrap: wrap;
            padding: $space3 0;

            .block {
                color: $text1;
                flex: 1 1 300px;

                hr {
                    border: none;
                    width: 100%;
                    height: 1px;
                    background: $soft;
                }
            }
        }

        .copyright, .header {
            width: calc(100% + ($space3 * 2));
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: -$space3;
            height: 50px;
            padding: 0 $space3;

            .data {
                width: 100%;
                max-width: 1500px;
                color: $text1;
                font-size: 13px;
            }
        }

        .copyright {
            background: $dynamic1;
        }

        .header {
            background: $dynamic1;
        }
    }
</style>
