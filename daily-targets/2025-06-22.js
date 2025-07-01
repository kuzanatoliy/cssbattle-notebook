module.exports = `
<p><dl>
<style>
  * {
    background: #48BF7D;
    * {
      background: #394257;
    }
    body {
      margin: 115px 165px;
      rotate: 45deg;
      p {
        margin: 0 0 0 35px;
        background: #48BF7D;
        height: 35px;
        border-radius: 0 0 0 10px;
      }
      dl {
        margin: 0;
        position: fixed;
        inset: -18px -18px 18px 18px;
        clip-path: polygon(0 0, 100% 0, 100% 100%);
      }
    }
  }
</style>
`;
