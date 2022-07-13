<script lang="ts">
	import Button from "./Button.svelte";
	import { _ } from "svelte-i18n";
	import {page} from "$app/stores";
	import {onMount} from "svelte";
    import Icon from "@iconify/svelte";

	interface LinkItem {
        display: string;
        path: string;
		active?: boolean;
	}

    const links: LinkItem[] = [
        {
            display: $_("__layout.navBar.home"),
			path: "/"
		},
        {
            display: $_("__layout.navBar.about"),
            path: "/about"
        },
		{
			display: $_("__layout.navBar.contact"),
			path: "/contact"
		},
		{
			display: $_("__layout.navBar.jobs"),
			path: "/jobs"
		},
		{
			display: $_("__layout.navBar.projects"),
			path: "/projects"
		}
	];

	function calculateActiveLinks() {
		const activeMatches: number[] = [];

		links.forEach((link, index) => {
			link.active = false;

			if (
					link.path === $page.url.pathname ||
					$page.url.pathname.startsWith(link.path)
			) {
				activeMatches.push(index);
			}
		});

		links[activeMatches[activeMatches.length - 1]].active = true;
	}

	calculateActiveLinks();

	onMount(() => {
		let lastUrl = "";

        const urlObserver = new MutationObserver((mut) => {
            if (location.href !== lastUrl) {
                lastUrl = location.href;
                calculateActiveLinks();
			}
		});

        urlObserver.observe(document, { subtree: true, childList: true });

        return () => {
			urlObserver.disconnect();
		};
	});
</script>

<div class="navBar">
	<div class="inner">
		<a href="/" class="logo">
			<img
					src="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg"
					alt="Logo"
					draggable="false"
			/>
		</a>

		<div class="middle">
			{#each links as link, index}
				<a
						href="{link.path}"
						class={link.active ? "active" : ""}
				>{link.display}</a>

				{#if index < links.length - 1}
					<span></span>
				{/if}
			{/each}
		</div>

		<div class="end desktop">
			<Button>
				{$_("__layout.navBar.login")}
			</Button>

			<Button display="outline">
				{$_("__layout.navBar.register")}
			</Button>
		</div>

		<div class="end mobile">
			<button>
				<Icon icon="charm:menu-hamburger" />
			</button>
		</div>
	</div>
</div>

<style lang="scss">
  @import "../Color";

  .navBar {
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: $layer1;
	z-index: 100;

    .inner {
	  width: 100%;
	  max-width: 1500px;
	  display: flex;
	  justify-content: space-between;
	  margin: 0 40px;
		position: relative;
	  align-items: center;

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
		color: $text1;
		align-items: center;
		  //position: absolute;
		  //top: 50%;
		  //left: 50%;
		  //transform: translate(-50%, -50%);

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
			font-size: 12px;
		  position: relative;
			padding: 0 10px;

		  &:after {
			content: "";
			display: flex;
			position: absolute;
			background: $brand2;
			bottom: 20px;
			left: 50%;
			width: calc(100% - 40px);
			height: 3px;
			border-radius: 30px;
			transform: translate(-50%, -100%) scale(0);
			opacity: 0;
			transition: $transition1;
		  }

		  &:hover {
			color: $brand2;
		  }

			&.active {
				color: $brand2;

			  &:after {
					opacity: 1;
					transform: translate(-50%, 0) scale(1);
				}
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
		  align-items: center;

		  &.mobile {
			display: none;

			button {
			  width: 30px;
			  height: 30px;
			  border: none;
			  border-radius: $radius1;
			  display: flex;
			  padding: 0;
			  align-items: center;
			  justify-content: center;
			  transition: $transition1;
			  color: $text2;
			  background: transparent;
			  font-size: 16px;
			  cursor: pointer;

			  &:hover {
				color: $brand2;
				background: $dynamicLayer1;

				&:active {
					background: $brand2;
				  color: $brandText2;
				}
			  }
			}
		  }

          @media (max-width: 800px) {
            &.mobile {
			  display: flex;
			}

			&.desktop {
			  display: none;
            }
          }
		}
	}
  }
</style>
