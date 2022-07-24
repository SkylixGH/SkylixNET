<script lang="ts">
	import PageView from "../lib/PageView.svelte";
	import Form from "../lib/Form.svelte";
	import Flex from "../lib/Flex.svelte";
</script>

<PageView title="Register">
    <Flex width="100%" height="100%">
        <Form items={[
		{
			label: "Name",
            type: "name",
            placeholder: [
				"First Name",
                "Last Name"
            ]
        },
		{
			label: "Email",
            type: "email",
            placeholder: "Email"
        },
		{
			label: "Password",
            type: "password",
            placeholder: "Your Password"
        }
    ]} />
    </Flex>
</PageView>
