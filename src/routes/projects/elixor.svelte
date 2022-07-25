<script lang="ts">
    import PageView from "../../lib/PageView.svelte";
    import Landing from "../../lib/Landing.svelte";
    import FeatureCards from "../../lib/FeatureCards.svelte";
	import Cards from "../../lib/Cards.svelte";
	import Flex from "../../lib/Flex.svelte";
</script>

<PageView title="Elixor Framework">
	<Landing
		title="Elixor Framework"
		header="Build Powerful Server and Client Apps with Elixor"
	/>

	<FeatureCards
		cards={[
            {
                title: "Fast and Responsive",
                icon: "ic:outline-speed",
                description: "Hi"
            },
            {
                title: "Easy to Use",
                icon: "ant-design:build-filled",
                description: "The Elixor API is a high level C++ API"
            },
            {
                title: "Polygot Framework",
                icon: "bxl:c-plus-plus"
            },
            {
                title: "High Coverage",
                icon: "nimbus:stats"
            },
            {
                title: "Secure",
                icon: "ant-design:lock-outlined"
            },
            {
                title: "Open Source",
                icon: "ant-design:github-filled"
            },
            {
                title: "MIT License",
                icon: "tabler:license"
            },
            {
                title: "Community Support",
                icon: "fluent:people-community-16-regular"
            }
		]}
	/>

	<br />
	<h1>Lets Get Started</h1>

	<Flex width="100%">
		<Cards
			cards={[
					{
						title: "Download",
						image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
						description: "Download the Elixor Framework as a .lib file with headers or the source code as a zip."
					},
					{
						title: "Documentation",
						image: "https://avatars.githubusercontent.com/u/32372333?v=4&s=160",
						description: "Get started by reading the official documentation for the Elixor Framework."
					},
					{
						title: "Open an Issue",
						image: "https://avatars.githubusercontent.com/u/45464816?v=4",
						description: "Open an issue on the Elixor Github repository.",
						url: "https://github.com/SkylixGH/Elixor/issues"
					}
			]}
		/>
	</Flex>
</PageView>
