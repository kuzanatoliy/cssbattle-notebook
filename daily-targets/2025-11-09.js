module.exports = `
<p><p>
<style>
  * {
    background: #6F9893;
    body {
      background: #394257;
      margin: 100px 150px;
      rotate: 45deg;
      p {
        position: fixed;
        background: #D9D9D9;
        inset: 0;
        margin: -18px -18px -75px -75px;
        clip-path: polygon(0 0, 0 100%, 100% 100%);
        & + p {
          margin: -75px -75px -18px -18px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
