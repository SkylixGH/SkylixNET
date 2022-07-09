<script>

</script>

<svelte:head>
    <title>Skylix</title>
</svelte:head>

<div class="banner">
    <div class="bk">
        <div class="ring"></div>
        <div class="ring"></div>

        <div class="ring"></div>
        <div class="ring"></div>
    </div>

    <div class="text">
        <h1>SKYLIX</h1>
        <p>Open Source development at its absolute peak</p>
    </div>
</div>

<style lang="scss">
    @import "../conf/Color";

    .banner {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: center;
      position: relative;
      align-items: center;
      height: 350px;
      background-color: $l1;
      overflow: hidden;

      .bk {
        position: absolute;
        width: 100vw;
        height: 100%;

        .ring {
          width: 250px;
          height: 250px;
          position: absolute;
          display: flex;
          border-radius: 100%;
          border: 3px solid yellow;
          border-top-color: transparent;
          animation: spin 1s infinite linear;

          &:nth-child(1) {
            top: -125px;
            left: -125px;
          }

          &:nth-child(2) {
            width: 300px;
            height: 300px;
            top: -150px;
            left: -150px;
          }

          &:nth-child(3) {
            width: 300px;
            height: 300px;
            bottom: -150px;
            right: -150px;
          }

          &:nth-child(4) {
            bottom: -125px;
            right: -125px;
          }
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      .text {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 100%;
        width: 100%;

        &:before {
          content: "";
          display: flex;
          width: 50%;
          height: 100%;
          background: $bf2;
          position: absolute;
          transform: skewX(-20deg);
          left: -100%;
          animation: glimmer 2s ease-in-out infinite;
        }

        @keyframes glimmer {
          from {
            left: -100%;
            width: 0;
          }

          to {
            left: 100%;
            width: 100%;
            opacity: 0;
          }
        }

        h1 {
          font-size: 100px;
          letter-spacing: 30px;
          font-family: "Montserrat", sans-serif;
          margin: 0;
          color: $b2;
        }

        p {
          margin: 0;
        }
      }
    }
</style>
