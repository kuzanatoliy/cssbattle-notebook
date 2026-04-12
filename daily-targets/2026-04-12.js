module.exports = `
<p><p><p><p>
<style>
  * {
    background: #F3AC3C;
    body {
      background: #442929;
      margin: 65px 110px;
      p {
        float: left;
        margin: 0 0 0 40px;
        width: 40px;
        height: 170px;
        & + p {
          width: 20px;
          & + p {
            position: fixed;
            border-radius: 9in;
            height: 80px;
            width: 80px;
            left: 90px;
            top: 105px;
            & + p {
              left: 230px;
            }
          }
        }
      }
    }
  }
</style>
`;
