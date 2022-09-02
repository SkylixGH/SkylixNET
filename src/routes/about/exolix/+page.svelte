<script lang="ts">
    import Features from "../../../lib/Features.svelte";
    import InfoPage from "../../../lib/InfoPage.svelte";
    import Text from "../../../lib/Text.svelte";
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
    <Features 
        features={[
            {
                imageOrIcon: "lucide:cpu",
                title: "Performance Obsessed",
                description: "Exolix was written with high performance in mind to reduce overhead and increase developer potential."
            },
            {
                imageOrIcon: "lucide:monitor",
                title: "Cross Platform",
                description: "Exolix was written to run on any platform! Linux, Windows, Mac, Android, IOS and MORE!"
            },
            {
                imageOrIcon: "lucide:book-open",
                title: "Easy to Learn",
                description: "Exolix's API was designed to be easy to use. Our documentation is also structured in a progressive way meaning you can see results in no time!"
            },
            {
                imageOrIcon: "lucide:package",
                title: "Easy to Install",
                description: "Exolix is easy to install and easy to use. We have a very simple installer that will install everything for you!"
            },
            {
                imageOrIcon: "lucide:message-square",
                title: "Free Community Support",
                description: "Exolix has a free community support system designed to help you tackle any issues you may have!"
            },
            {
                imageOrIcon: "lucide:file-code",
                title: "Open Source",
                description: "Exolix is open source and is free to use! We encourage you to join our community and help us make Exolix better!"
            }
        ]}
    />
</InfoPage>
