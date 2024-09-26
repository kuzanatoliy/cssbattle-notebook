module.exports = `
<p><p><dl>
<style>
  * {
    background: #434B92;
    body {
      border-inline: solid 30px #F3AC3C;
      margin: 40px 125px 82px;
      * {
        border-radius: 9in;
        position: fixed;
      }
    }
    p {
      margin: 0;
      background: #000;
      height: 40px;
      width: 40px;
      top: 195px;
      left: 140px;
    }
    p + p {
      left: 220px;
    }
    dl {
      background: #F3AC3C;
      height: 300px;
      width: 300px;
      top: 156px;
      left: 50px;
      clip-path: polygon(0 0, 100% 0, 100% 46px, 0 46px);
    }
  }
</style>
`;
