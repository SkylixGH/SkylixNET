<script lang="ts">

import PageView from "../../lib/PageView.svelte";
import Cards from "../../lib/Cards.svelte";
</script>

<PageView title="Projects">
	<Cards cards={[
        {
            title: "Elixor Framework",
            image: "https://raw.githubusercontent.com/SkylixGH/Elixor/Master/resources/ElixorBanner.svg",
            description: "An all purpose polygot high coverage framework for building high performance server side and client applications with low development costs and maintenance costs.",
            url: "/projects/elixor",
        },
        {
            title: "SkylixMC",
            image: "https://raw.githubusercontent.com/SkylixGH/Elixor/Master/resources/ElixorBanner.svg",
            description: "A MineCraft minigames network by Skylix!",
            url: "/projects/skylixmc",
        }
	]} />
</PageView>
