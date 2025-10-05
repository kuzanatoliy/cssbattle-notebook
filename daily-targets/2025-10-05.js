module.exports = `
<p><p><p><p><p>
<style>
  * {
    background: #AC5353;
    * {
      background: #222;
      border-radius: 9in;
      margin: 100px 110px 20px;
      p {
        position: fixed;
        padding: 30px;
        top: -60px;
        left: 0;
        & + p {
          left: 120px;
          & + p {
            padding: 10px;
            top: -80px;
            left: 80px;
            & + p {
              padding: 50px 5px;
              left: 85px;
              & + p {
                padding: 5px 70px;
                left: 0;
                top: -35px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
