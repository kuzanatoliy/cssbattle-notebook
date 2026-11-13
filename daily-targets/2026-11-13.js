module.exports = `
<p><p>
<style>
  * {
    background: #411C56;
    body {
      -webkit-box-reflect: below 30vw;
    }
    * {
      background: #B7D7CD;
      border: solid 10px #C06C88;
      margin: 30px 160px 210px 90px;
      height: 40px;
      * {
        margin: -10px;
        position: relative;
        top: 50px;
        left: 70px;
        & + * {
          border: 0;
          top: -20px;
          margin: 0 70px 0 0;
        }
      }
    }
  }
</style>
`;
