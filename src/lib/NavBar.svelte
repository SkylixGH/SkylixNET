<script lang="ts">
	import Button from "./navBar/Button.svelte";

	interface LinkItem {
        display: string;
        path: string;
	}

    const links: LinkItem[] = [
        {
            display: "Home",
			path: "/"
		},
        {
            display: "About",
            path: "/about"
        },
		{
			display: "Contact",
			path: "/contact"
		},
		{
			display: "Jobs",
			path: "/jobs"
		},
		{
			display: "Projects",
			path: "/projects"
		}
	];
</script>

<div class="navbar">
	<div class="inner">
		<div class="logo">
			<img
					src="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg"
					alt="Logo"
					draggable="false"
			/>
		</div>

		<div class="middle">
			{#each links as link, index}
				<a href="{link.path}">{link.display}</a>

				{#if index < links.length - 1}
					<span></span>
				{/if}
			{/each}
		</div>

		<div class="end">
			<Button text="Login" />
			<Button text="Register" style="outline" />
		</div>
	</div>
</div>

<style lang="scss">
  @import "../Color";

  .navbar {
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
	display: flex;
	align-items: center;
	justify-content: center;

    .inner {
	  width: 100%;
	  max-width: 1500px;
	  display: flex;
	  justify-content: space-between;
	  margin: 0 40px;
		position: relative;

      .logo {
		position: relative;
		cursor: pointer;

        img {
          width: 40px;
		  transition: $transition2;
        }

		&:before {
		  content: "";
		  display: flex;
		  position: absolute;
		  width: 80px;
		  height: 50px;
		  left: -20px;
		  top: -5px;
		  background: $brand2;
		  z-index: -1;
		  border-radius: $radius1;
		  opacity: 0;
		  transition: $transition2;
		  transform: scale(0);
		}

		&:hover {
		  img {
			transform: scale(1.3);
		  }

		  &:before {
			opacity: 0.15;
			transform: scale(1);
		  }
		}
      }

	  .middle {
		display: flex;
		gap: 10px;
		color: $text1;
		align-items: center;
		  position: absolute;
		  top: 50%;
		  left: 50%;
		  transform: translate(-50%, -50%);

		@media (max-width: 800px) {
		  display: none;
		}

		a {
		  color: $text2;
		  text-decoration: none;
		  transition: $transition2;
		  height: 70px;
		  display: flex;
		  align-items: center;
			text-transform: uppercase;
			font-size: 11px;

		  &:hover {
			color: $brand2;
		  }
		}

		span {
		  width: 2px;
		  height: 2px;
		  background: $text1;
			border-radius: 100%;
		}
	  }

		.end {
			display: flex;
			gap: 10px;
		}
	}
  }
</style>
