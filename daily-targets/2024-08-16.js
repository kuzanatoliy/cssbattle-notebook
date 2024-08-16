module.exports = `
<p><p><p><p>
<style>
  * {
    background: #EADCDC;
    body {
      border-radius: 9in;
      margin: 55px 105px;
      padding: 55px 22px;
      color: #151109;
      box-shadow: -77px -70px 0 -65px, 70px -62px 0 -65px;
      p {
        margin: 0;
        height: 60px;
        width: 60px;
        background: #151109;
        border-radius: 37px 23px 30px;
        float: left;
        & + p {
          margin: 0 0 0 25px;
          scale: -1 1;
          & + p {
            margin: 13px 0 0 53px;
            height: 20px;
            width: 40px;
            border-radius: 2px 2px 18px 18px;
            & + p {
              position: fixed;
              background: #EADCDC;
              margin: 33px 37px;
              height: 16px;
              width: 16px;
              border-radius: 9in;
              box-shadow: -87px 1px #EADCDC;
            }
          }
        }
      }
    }
  }
</style>
`;
