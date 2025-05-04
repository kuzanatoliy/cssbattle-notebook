module.exports = `
<p><p>
<style>
  * {
    background: #FAE29E;
    body {
      margin: 40px 75px;
      p {
        border: solid 40px #4A9A86;
        border-top: none;
        padding: 25px;
        & + p {
          margin: 40px 0;
          scale: -1;
          border-color: #4C4C6B;
        }
      }
    }
  }
</style>
`;
