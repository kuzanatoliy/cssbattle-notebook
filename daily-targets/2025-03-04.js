module.exports = `
<p><p><dl>
<style>
  * {
    background: #4A9A86;
    margin: 0;
    p {
      background: #EBF6F0;
      height: 100px;
      clip-path: polygon(0 0, 100% 0, 342q 100%, 82q 100%);
      & + p {
        scale: -1;
        margin-top: 100px;
        & + dl {
          border-radius: 9in;
          position: fixed;
          inset: 66px 116px;
        }
      }
    }
  }
</style>
`;
