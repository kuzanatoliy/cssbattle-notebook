module.exports = `
<dl><p></dl><dl><p><p>
<style>
  * {
    background: #141413;
    body {
      background: #D97757;
      margin: 40px 50px;
      dl {
        width: 50px;
        height: 50px;
        -webkit-box-reflect: right 50vw;
        p {
          position: relative;
          height: 20px;
          width: 20px;
          left: 70px;
          top: 30px;
        }
        & + dl {
          height: 120px;
          margin-top: 50px;
          p {
            height: 50px;
            top: 75px;
            & + p {
              width: 50px;
              top: 9px;
              left: 110px;
            }
          }
        }
      }
    }
  }
</style>
`;
