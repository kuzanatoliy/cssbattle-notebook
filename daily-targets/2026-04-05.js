module.exports = `
<p><p>
<style>
  * {
    background: #D8D8D8;
    body {
      border: solid #457D81;
      border-width: 0 40px;
      margin: 0 40px 230px;
      -webkit-box-reflect: below 40vw;
      p {
        position: fixed;
        inset: 114px 40px;
        background: #C47F7D;
        & + p {
          inset: 84px 50vh;
        }
      }
    }
  }
</style>
`;
