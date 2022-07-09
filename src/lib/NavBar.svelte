<script lang="ts">
    let isMobile = false;
    export let progress = 10;

    let opacityProg = 1;

    if (progress > 99.9) opacityProg = 0;
    else opacityProg = 1;

    $: {
        if (progress > 99.9) opacityProg = 0;
        else opacityProg = 1;
    }

    interface Link {
        display: string;
        path: string;
    }

    const links: Link[] = [
        {
            display: "Home",
            path: "/"
        },
        {
            display: "About",
            path: "/about"
        },
        {
            display: "Projects",
            path: "/projects"
        },
        {
            display: "Contact",
            path: "/contact"
        },
        {
            display: "Jobs",
            path: "/jobs"
        }
    ];
</script>

<div class="root">
    <a class="logo" href="/">
        <img
                src="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg"
                draggable="false"
                alt="Logo"
        />
    </a>

    {#if !isMobile}
        <div class="links">
            {#each links as link, index}
                <a href="{link.path}">{link.display}</a>

                {#if index < links.length - 1}
                    <span></span>
                {/if}
            {/each}
        </div>

        <div class="buttons">
            <button>LOGIN</button>
            <button>REGISTER</button>
        </div>
    {:else}
        MOBILE
    {/if}

    <span class="progress" style={`width: ${opacityProg === 0 ? 100 : progress > 100 ? 100 : (progress < 0 ? 0 : progress)}%;` +
        `opacity: ${opacityProg}`}></span>
</div>

<style lang="scss">
    @import "../conf/Color";

    .root {
      justify-content: space-between;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 20px;
      height: 70px;
      background: $l2;

      .progress {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        transition: width 100ms ease-in-out, opacity 500ms ease-in-out;
        background: linear-gradient(90deg, #00FFEF, #4166F5);
      }

      .logo {
        position: relative;
        display: flex;
        align-items: center;

        img {
          width: 40px;
          position: absolute;
          transition: all 500ms cubic-bezier(1.000, -0.600, 0.000, 1.650);
        }

        &:before {
          content: "";
          display: flex;
          position: absolute;
          left: -20px;
          height: 50px;
          width: 0;
          border-radius: $br4;
          transition: all 500ms cubic-bezier(1.000, -0.600, 0.000, 1.650);
        }

        &:hover {
          img {
            transform: scale(1.3);
          }

          &:before {
            background: $bf1;
            width: 70px;
            left: -15px;
          }
        }
      }

      .links {
        position: absolute;
        left: 50vw;
        transform: translate(-50%, 0);
        display: flex;
        gap: 10px;
        align-items: center;

        a {
            color: $t3;
          text-decoration: none;
          transition: $tr;
          font-size: 13px;

          &:hover {
            color: $t4;
          }
        }

        span {
          width: 3px;
          height: 3px;
          background: $t2;
          border-radius: 100%;
        }
      }

      .buttons {
        display: flex;
        gap: 5px;

        button {
          background: transparent;
          font-size: 13px;
          color: $t3;
          transition: $tr;
          border: none;
            outline: none;
          border-radius: $br1;
          height: 40px;
          padding: 0 20px;

          &:nth-child(2) {
            background: $b2;
            color: $bt2;
          }

          &:hover {
            color: $b2;
            cursor: pointer;
            background: $bf2;

            &:nth-child(2) {
              background: $b1;
              color: $bt1;
            }
          }
        }
      }
    }
</style>
