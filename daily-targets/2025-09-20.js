module.exports = `
<p><p><p><p><p><p>
<style>
  * {
    margin: 0;
    background: #492FB0;
    p {
      position: fixed;
      background: #DB5EAD;
      padding: 75px 25px;
      top: 75px;
      left: 45px;
      & + p {
        left: 175px;
        rotate: 15deg;
        & + p {
          left: 305px;
          rotate: 30deg;
          & + p {
            padding: 50px;
            border-radius: 9in;
            top: 100px;
            left: 20px;
            & + p {
              left: 150px;
              & + p {
                left: 280px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
