module.exports = `
<p>
<style>
  body, html {
    border-radius: 9in;
    border: solid 30px #000;
  }
  * {
    background: #5A9F48;
    margin: 80px 100px;
    * {
      margin: -85px 0 25px;
      -webkit-box-reflect: below -30px;
      * {
        position: relative;
        padding: 25px;
        margin: 15px;
        top: 30px;
      }
    }
  }
</style>
`;
