module.exports = `
<p><p>
<style>
  html {
    background: #FAD98C;
    body {
      background: #89B3EC;
      margin: 55px 50px;
      p {
        position: fixed;
        border: solid #3C5A84;
        border-width: 0 0 30px 40px;
        padding: 65px 15px;
        margin: 0 130px;
        & + p {
          border: solid #2A2828;
          border-width: 30px 100px 0px;
          margin: 0 10px;
          padding: 35px 40px;
        }
      }
    }
  }
</style>
`;
