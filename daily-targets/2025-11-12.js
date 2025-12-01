module.exports = `
<p><p a><p><p a>
<style>
  * {
    background: #BDE4C1;
    [a] {
      padding: 15px;
      -webkit-box-reflect: below 40px;
    }
    * {
      background: #9F6766;
      margin: 116px 102px;
      p {
        position: fixed;
        padding: 50px 20px;
        top: -100px;
        left: 196px;
        & + p {
          left: 252px;
          & + p {
            top: 68px;
            left: -40px;
            & + p {
              left: -86px;
            }
          }
        }
      }
    }
  }
</style>
`;
