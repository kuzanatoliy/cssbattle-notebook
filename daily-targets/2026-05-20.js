module.exports = `
<p><p><p>
<style>
  * {
    background: #30383F;
    body {
      background: #F4DCBF;
      margin: 50px 20px;
      * {
        position: fixed;
        inset: 0 170px;
        & + p {
          inset: 84px 30vw;
          & + p {
            color: #30383F;
            inset: 109px 175px;
            box-shadow: 155px 0, 155px -75px, 155px 75px, -155px 0, -155px -75px, -155px 75px;
          }
        }
      }
    }
  }
</style>
`;
