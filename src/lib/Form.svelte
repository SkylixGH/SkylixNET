<script lang="ts">
    import Icon from "@iconify/svelte";
	import Button from "./Button.svelte";

	interface InputRegistryItem {
		label: string;
		type: "text" | "password" | "email" | "name";
		placeholder?: string | [ string, string ];
		passwordShown?: boolean;
    }

	export let items: InputRegistryItem[] = [];

	let form: HTMLFormElement;
</script>

<div class="form">
    <div class="inner">
        <h1>Form Title</h1>

        <form class="layout" bind:this={form}>
            {#each items as item}
                <span>{item.label}</span>

                {#if item.type !== "name"}
                    <label class="input">
                        <input
                                type={item.type === "password" ? (
                                    item.passwordShown
                                        ? "text"
                                        : "password"
                                ) : item.type}
                                placeholder={Array.isArray(item.placeholder) ? item.placeholder.join(" ") : item.placeholder}
                        />

                        {#if item.type === "password"}
                            <button on:click={() => item.passwordShown = !item.passwordShown} tabindex="-1" type="button">
                                <span
                                        class={`icon ${!item.passwordShown ? "_visible" : ""}`}
                                >
                                    <Icon icon="bx:show" />
                                </span>

                                <span
                                        class={`icon ${item.passwordShown ? "_visible" : ""}`}
                                >
                                    <Icon icon="bx:hide" />
                                </span>
                            </button>
                        {/if}
                    </label>
                {:else}
                    <div class="rowInputs">
                        <input
                                placeholder={Array.isArray(item.placeholder) ? item.placeholder[0] : item.placeholder}
                                class="fName"
                        />

                        <input
                                placeholder={Array.isArray(item.placeholder) ? item.placeholder[1] : item.placeholder}
                                class="lName"
                        />
                    </div>
                {/if}

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
        max-width: 500px;
        width: 100%;

        h1 {
            width: 100%;
            display: flex;
            align-content: center;
            justify-content: center;
            margin: 0 0 20px 0;
            padding: 0;
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

                    &:-webkit-autofill,
                    &:-webkit-autofill:hover,
                    &:-webkit-autofill:focus {
                        border-color: $brand1;
                    }
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

                    .icon {
                        position: absolute;
                        transition: $transition2;
                        transform: rotate(40deg) scale(0);
                        padding: 0;
                        font-size: 16px;
                        margin-top: 3px;
                        opacity: 0;

                        &._visible {
                            transform: rotate(0) scale(1);
                            opacity: 1;
                        }

                        & > * {
                            padding: 0;
                            margin: 0;
                        }
                    }
                }
            }

            .rowInputs {
                display: flex;
                flex-direction: row;
                gap: 10px;

                input {
                    flex: 1;
                    height: 35px;
                    border-radius: $radius1;
                    padding: 10px;
                    border: none;
                    border-bottom: 2px solid $dynamicLayer2;
                    color: $text3;
                    outline: none;
                    transition: $transition1;
                    background: $dynamicLayer1;

                    &:hover {
                        border-color: $dynamicLayer4;
                    }

                    &:focus {
                        border-color: $brand2;
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
</style>
