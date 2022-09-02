<script lang="ts">
    import InfoPage from "../../lib/InfoPage.svelte";
    import Text from "../../lib/Text.svelte";
    import Cards from "../../lib/Cards.svelte";
</script>

<InfoPage 
    title="Skylix"
    logo="/logo/Logo.svg"

    banner={{
        text: "Skylix",
        subText: "The future of online social media!",
        image: "/tempb/xeFx0.gif"
    }}

    links={[
        {
            label: "Discord Server",
            href: "/discord"
        },
        {
            label: "Get Involved",
            href: "/get-involved"
        }
    ]}
>
    <Cards 
        cards={[
            {
                image: "/logo/Logo.svg",
                banner: "/tempb/xeFx0.gif",
                title: "Skylix",
                description: "Skylix is a social media platform designed to be easy to use, customize with plugins, and MORE! Skylix comes with support for video streaming, text communication and much more.",
                href: "/"
            },
            {
                image: "/logo/Exolix.svg",
                banner: "/tempb/xeFx0.gif",
                title: "Exolix",
                description: "The future of online social media??",
                href: "/about/exolix"
            },
            {
                image: "https://seeklogo.com/images/M/minecraft-logo-5EAD3A1535-seeklogo.com.png",
                banner: "/tempb/xeFx0.gif",
                title: "Axis",
                description: "A multilanguage IDE designed for making software development easier. It comes packed with extensions support, themes, debugging tools and MORE!",
                href: "/about/axis"
            }
        ]}
    />
</InfoPage>
