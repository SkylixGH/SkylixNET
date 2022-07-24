<script lang="ts">
    import Icon from "@iconify/svelte";
	import Button from "./Button.svelte";

	interface InputRegistryItem {
		label: string;
		type: "text" | "password";
		placeholder?: string;
		passwordShown?: boolean;
    }

	const items: InputRegistryItem[] = [
		{
			label: "Email",
            type: "text",
            placeholder: "Your Email"
        },
		{
			label: "Password",
            type: "password",
            placeholder: "Your Password"
        }
    ];

	let form: HTMLFormElement;
</script>

<div class="form">
    <div class="inner">
        <h1>Form Title</h1>

        <form class="layout" bind:this={form}>
            {#each items as item}
                <span>{item.label}</span>

                <label class="input">
                    <input
                            type={item.type}
                            placeholder={item.placeholder}
                    />

                    {#if item.type === "password"}
                        <button on:click={() => item.passwordShown = !item.passwordShown} tabindex="-1" type="button">
                        <span class="show" style={`${!item.passwordShown ? "opacity: 0; transform: rotate(40deg) scale(0);" : "transform: scale(1) rotate(0deg); opacity: 1;"}`}>
                            <Icon icon="bx:show" />
                        </span>

                            <span class="hide" style={`${item.passwordShown ? "opacity: 0; transform: rotate(40deg) scale(0);" : "transform: scale(1) rotate(0deg); opacity: 1;"}`}>
                            <Icon icon="bx:hide" />
                        </span>
                        </button>
                    {/if}
                </label>

                <div></div>
            {/each}

            <div class="buttons">
                <Button
                        display="outline"
                        on:click={(e) => {
                            e.preventDefault();
                            form.submit();
                        }}
                >Submit</Button>

                <Button
                        on:click={(e) => {
                            e.preventDefault();
                            form.reset();
                        }}
                >Reset</Button>
            </div>
        </form>
    </div>
</div>

<style lang="scss">
    @import "../Color";

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        .inner {
            max-width: 500px;
            width: 100%;

            h1 {
                width: 100%;
                display: flex;
                align-content: center;
                justify-content: center;
            }

            .layout {
                display: flex;
                flex-direction: column;
                gap: 10px;

                .input {
                    display: flex;
                    background: $dynamicLayer1;
                    border-bottom: 2px solid $dynamicLayer2;
                    height: 35px;
                    border-radius: $radius1;
                    overflow: hidden;
                    align-items: center;
                    justify-content: center;
                    transition: $transition1;

                    &:hover {
                        border-color: $dynamicLayer4;
                    }

                    &:focus-within {
                        border-color: $brand2;
                    }

                    input {
                        width: auto;
                        flex: 1;
                        height: 100%;
                        background: transparent;
                        color: $text3;
                        outline: none;
                        border: none;
                        padding: 10px;
                    }

                    button {
                        width: 25px;
                        height: 25px;
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                        color: $text3;
                        background: transparent;
                        outline: none;
                        border: none;
                        transition: $transition2;
                        padding: 0;
                        border-radius: $radius1;

                        &:hover {
                            background: $dynamicLayer1;
                        }

                        .show, .hide {
                            position: absolute;
                            transition: $transition2;
                            transform: rotate(40deg) scale(0);
                            padding: 0;
                            font-size: 16px;
                            margin-top: 3px;

                            & > * {
                                padding: 0;
                                margin: 0;
                            }
                        }
                    }
                }
            }

            .buttons {
                display: flex;
                margin-top: 20px;
                gap: 10px;
            }
        }
    }
</style>
