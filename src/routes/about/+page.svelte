<script lang="ts">
    import InfoPage from "../../lib/InfoPage.svelte";
    import Text from "../../lib/Text.svelte";
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
            href: "https://discord.gg/wtYw7GRfNF"
        }
    ]}
>
    <Text>Coming Soon [June 15th 2023]</Text>
</InfoPage>
