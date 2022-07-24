<script lang="ts">

import PageView from "../lib/PageView.svelte";
import Cards from "../lib/Cards.svelte";
</script>

<PageView title="Projects">
	<Cards cards={[
        {
            title: "Elixor Framework",
            image: "https://raw.githubusercontent.com/SkylixGH/Elixor/Master/resource/ElixorLogo.svg",
            description: "An all purpose polygot high coverage framework for building high performance server side and client applications with low development costs and maintenance costs.",
            url: "/projects/elixor"
        }
	]} />
</PageView>
