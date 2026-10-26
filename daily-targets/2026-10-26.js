module.exports = `
<p><p><p><p><p><p><p><dl>
<style>
  * * {
    background: #479582;
    margin: 70px 80px;
    p {
      border: solid 10px #2834BA;
      float: left;
      padding: 70px 0;
      margin: 0 30px;
      & + * + * + * {
        border-width: 20px;
        position: fixed;
        padding: 30px;
        top: 20px;
        border-radius: 9in;
        & + * {
          top: 180px;
          left: 160px;
          & + * {
            padding: 0;
            border-radius: 0 0 9in 9in;
            top: 30px;
            left: 220px;
            border-width: 30px;
            & + * {
              top: 210px;
              left: 60px;
              scale: -1;
              & + * {
                padding: 10px;
                border-radius: 0;
                color: #479582;
                box-shadow: 30px 30px, 0 30px, 60px 30px, -25vw 250px, -130px 250px, -40vw 250px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
