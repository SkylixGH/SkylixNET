<script lang="ts">
    export let text = "Default text";
    export let style: "text"
        | "outline" = "text";


</script>

<button class={"button " +
    `style-${style}`}>{text}</button>

<style lang="scss">
    @import "../../Color";

    .button {
      padding: 0 20px;
      height: 30px;
      border: none;
      border-radius: $radius2;
      transition: $transition1;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 11px;
        text-transform: uppercase;

      &.style-text {
        background: transparent;
        color: $text2;

        &:hover {
          color: $text3;
          background: $dynamicLayer1;
        }
      }

      &.style-outline {
        position: relative;
        background: linear-gradient(80deg, $brand1, $brand2);
        color: $brandText2;

        &:before {
          position: absolute;
          content: "";
          display: flex;
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          background: $layer1;
          top: 2px;
          left: 2px;
          border-radius: calc($radius2 / 1.5);
          transition: $transition1;
        }

        &:after {
          content: "Register";
          position: absolute;
          font-weight: bold;
          background: -webkit-linear-gradient(80deg, $brand1, $brand2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: $transition1;
        }

        &:hover {
          &:before {
            opacity: 0;
            transform: scale(0);
          }

          &:after {
            opacity: 0;
          }
        }
      }
    }
</style>
