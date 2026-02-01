module.exports = `
<p><p><p><p>
<style>
  * {
    background: #4FA9C0;
    body {
      background: #F4DA64;
      margin: 70px 60px;
      p {
        float: left;
        padding: 40px 45px;
        margin: 0;
        & + p {
          padding: 40px 15px;
          margin-left: 160px;
          & + p {
            background: #2B2A4A;
            border-radius: 9in;
            position: relative;
            padding: 30px;
            margin: 0 30px;
            top: 50px;
            & + p {
              margin-left: 70px;
            }
          }
        }
      }
    }
  }
</style>
`;
