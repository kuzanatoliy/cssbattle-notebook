module.exports = `
<p><p><p>
<style>
  html {
    background: #469E6C;
    body {
      background: #F2F1E0;
      margin: 125px 50px;
      * {
        position: fixed;
        padding: 10px;
        margin: -20px;
        box-shadow: 80px 0, 200px 0;
        & + * {
          margin: 40px 20px;
          padding: 30px 20px;
          box-shadow: -20px 10px, 0 10px;
          & + * {
            margin-left: 260px;
          }
        }
      }
    }
  }
</style>
`;
