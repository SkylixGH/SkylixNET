<script lang="ts">
    import PageView from "../../lib/PageView.svelte";
    import Landing from "../../lib/Landing.svelte";
    import FeatureCards from "../../lib/FeatureCards.svelte";
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
</PageView>
