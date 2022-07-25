<script lang="ts">

import PageView from "../lib/PageView.svelte";
import Cards from "../lib/Cards.svelte";
import Flex from "../lib/Flex.svelte";
</script>

<PageView title="Projects">
	<Flex width="100%" height="100%">
		<Cards cards={[
			{
				title: "Elixor Framework",
				image: "https://raw.githubusercontent.com/SkylixGH/Elixor/Master/resource/ElixorLogo.svg",
				description: "An all purpose polygot high coverage framework for building high performance server side and client applications with low development costs and maintenance costs.",
				url: "/projects/elixor"
			},
			{
				title: "MewGem",
				image: "https://cdn.discordapp.com/attachments/942110928592314388/976682909387866192/Untitled230_20220518200713.png",
				description: "A company written and structured by Skylix!",
				url: "/projects/mewgem"
			}
		]} />
	</Flex>
</PageView>
