module.exports = `
<dl><p><p><p>
<style>
  * {
    background: #BBB54E;
    body {
      background: #566713;
      border-radius: 9in;
      margin: 60px 110px;
      dl {
        height: 180px;
        margin: 0 50px;
        p {
          position: fixed;
          background: #FFF;
          padding: 25px;
          top: 109px;
          left: 45px;
          & + p {
            left: 175px;
            & + p {
              left: 305px;
            }
          }
        }
      }
    }
  }
</style>
`;
