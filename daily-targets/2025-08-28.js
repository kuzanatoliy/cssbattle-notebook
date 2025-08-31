module.exports = `
<style>
  * {
    background: #B6EBE7;
    body {
      background: repeating-linear-gradient(#724FAF 0px, #724FAF 30px, 0, #B6EBE7 50px);
      margin: 85px 145px;
      p {
        background: #724FAF;
        position: fixed;
        padding: 25px;
        left: 75px;
        top: 69px;
        & + p {
          padding: 40px 5px;
          top: 109px;
          left: 95px;
          & + p {
            padding: 5px 25px;
            top: 129px;
            & + p {
              top: 179px;
            }
          }
        }
      }
    }
  }
</style>
`;
