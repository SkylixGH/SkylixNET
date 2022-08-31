<script lang="ts">

import { goto } from "$app/navigation";

</script>

<img 
    class="logo"
    src="/logo/Logo.svg"
    alt="Logo"
    on:click={() => goto('/')}
/>

<style lang="scss">
    @import "../Colors.scss";

    .logo {
        width: 40px;
        height: 40px;
        transition: $transition;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;

            &:active {
                transform: scale(0.9);
            }
        }
    }
</style>