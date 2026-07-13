module.exports = `
<p><p><p>
<style>
  html {
    background: #C5AE92;
    border: solid #0D2A58;
    border-width: 40px 20px;
    margin: 0 70px;
    * {
      border-inline: solid 20px #FFF;
      margin: 30px -40px;
      p {
        position: fixed;
        inset: 90px 30px;
        margin: 0;
        border-color: #EA3424;
        & + p {
          inset: 70px 90px;
          & + p {
            inset-inline: 45vw;
            border-left-color: #FFF;
          }
        }
      }
    }
  }
</style>
`;
