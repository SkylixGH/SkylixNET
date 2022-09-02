<script lang="ts">
    import InfoPage from "../../../lib/InfoPage.svelte";
</script>

<InfoPage 
    title="Exolix"
    logo="/logo/Exolix.svg"

    banner={{
        text: "Exolix",
        subText: "A high performance software framework built on C++!",
    }}

    links={[
        {
            label: "Repository",
            href: "devops/skylix/exolix"
        },
        {
            label: "Documentation",
            href: "devops/skylix/exolix/wiki"
        },
        {
            label: "License",
            href: "devops/skylix/exolix/license"
        }
    ]}
>
        Hello World!
</InfoPage>
