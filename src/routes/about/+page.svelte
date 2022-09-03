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
                title: "Skylix",
                description: "Skylix is a social media platform designed to be easy to use, customize with plugins, and MORE! Skylix comes with support for video streaming, text communication and much more.",
                href: "/"
            },
            {
                image: "/logo/Exolix.svg",
                title: "Exolix",
                description: "The future of online social media??",
                href: "/about/exolix"
            },
            {
                image: "/logo/Axis.svg",
                title: "Axis",
                description: "A multilanguage IDE designed for making software development easier. It comes packed with extensions support, themes, debugging tools and MORE!",
                href: "/about/axis"
            },
            {
                image: "/logo/Crystal.svg",
                title: "Crystal",
                description: "A powerfull resource efficient operating system that is easy to use! Crystal comes with amazing GUIs for installing programs, managing the system and MORE!",
                href: "/about/crystal"
            },
            {
                image: "https://cdn.discordapp.com/attachments/942110928592314388/976682909387866192/Untitled230_20220518200713.png",
                title: "Mewgem",
                description: "Software product developed by Skylix, currently unknown purpose",
                href: "https://mewgem.tech"
            }
        ]}
    />
</InfoPage>
