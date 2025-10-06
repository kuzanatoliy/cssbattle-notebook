module.exports = `
<p><p><dl><dl>
<style>
  * {
    background: var(--b, #2F2F2F);
    body {
      background: #C1C1C1;
      margin: 110px 120px 110px 50px;
      border-radius: 9in;
      * {
        color: #2F2F2F;
        position: fixed;
        top: 114px;
        padding: 5px 60px;
        box-shadow: 0 30px;
        & + p {
          rotate: 90deg;
          left: 105px;
          box-shadow: 0 30px, 0 60px, 0 90px;
          & + dl {
            --b: #727272;
            left: 230px;
            top: 124px;
            height: 10px;
            dl {
              border-radius: 50px 0 35px;
              padding: 25px 65px;
              top: 145px;
              left: 180px;
              -webkit-box-reflect: above -10px;
            }
          }
        }
      }
    }
  }
</style>
`;
