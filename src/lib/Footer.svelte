<script lang="ts">
    import Icon from "@iconify/svelte";
    interface SocialLink {
        image: string;
        url: string;
    }

    const socials: SocialLink[] = [
        {
            image: "https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg",
            url: "https://skylix.net"
        },
        {
            image: "akar-icons:github-fill",
            url: "https://github.com/SkylixGH"
        },
        {
            image: "akar-icons:reddit-fill",
            url: "https://www.reddit.com/r/Skylix"
        },
        {
            image: "akar-icons:discord-fill",
            url: "https://discord.com/invite/b9vcR6evgG"
        }
    ];
</script>

<div class="footer">
    <div class="inner">
        <div class="section logo">
            <div class="compLogo">
                <img
                        src="https://raw.githubusercontent.com/SkylixGH/Info/main/logos/LogoDark.svg"
                        alt="Logo"
                        draggable="false"
                />
            </div>

            <div class="socials">
                {#each socials as social}
                    <a href={social.url} target="_blank">
                        {#if social.image.startsWith("https://") || social.image.startsWith("http://")}
                            <img
                                    draggable="false"
                                    alt="A"
                                    src={social.image}
                            />
                        {:else}
                            <Icon icon={social.image} />
                        {/if}
                    </a>
                {/each}
            </div>
        </div>

        <div class="section links">
            <a href="/">Home</a>
            <a href="/">Docs</a>
            <a href="/">Projects</a>
            <a href="/">Features</a>
            <a href="/">Family</a>
            <a href="/">Developers</a>
        </div>

        <div class="section links">
            <a href="/">Shop</a>
            <a href="/">MineCraft</a>
            <a href="/">About</a>
            <a href="/">Staff</a>
            <a href="/">Staff</a>
            <a href="/">Staff</a>
        </div>

        <div class="section links">
            <a href="/legal/tos">Terms of Service</a>
            <a href="/legal/privacy-policy">Privacy Policy</a>
            <a href="/legal/dmca">DMCA</a>
        </div>
    </div>
</div>

<style lang="scss">
	@import "../Color";

    .footer {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 40px;
        color: $text3;
        border-top: 1px solid $dynamicLayer2;
        margin-top: 50px;

      .inner {
        width: 100%;
        max-width: 1500px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 50px 0;

          .section {
              display: flex;
              flex: 255px;
              display: flex;
              flex-direction: column;

              &.links {
                  display: flex;
                  gap: 5px;

                  a {
                      color: $text2;
                      text-decoration: none;
                      transition: $transition1;
                      height: 30px;
                      display: flex;
                      align-items: center;
                      padding: 0 10px;
                      border-radius: $radius1;

                      &:hover {
                            color: $brand2;
                          background: $dynamicLayer1;
                          padding-left: 20px;
                      }
                  }
              }

              &.logo {
                  .compLogo {
                      width: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border-bottom: 1px solid $dynamicLayer2;
                      margin-bottom: 20px;

                      img {
                          max-width: 100px;
                      }
                  }

                  .socials {
                      display: flex;
                      gap: 10px;

                      a {
                          font-size: 25px;
                          width: 35px;
                          height: 35px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          border-radius: $radius1;
                          color: $brand2;
                          transition: $transition1;

                          &:hover {
                              background: $dynamicLayer1;

                              &:not(:first-child) {
                                  background: $brand2;
                                  color: $brandText2;
                              }
                          }

                        img {
                            width: 30px;
                        }
                      }
                  }
              }
          }
      }
    }
</style>
