module.exports = `
<p><p>
<style>
  * {
    background: #FEF6E2;
    border: solid #A82828;
    border-width: 0 50px 50px;
    border-radius: 0 0 9in 9in;
    margin: 40px 70px 130px;
    * {
      position: fixed;
      scale: -1;
      margin: 90px -50px 0;
      padding: 40px 80px;
      p {
        border-width: 25px;
        border-radius: 9in;
        padding: 0;
        top: -115px;
        left: 0;
        & + p {
          left: 210px;
          top: -113px;
        }
      }
    }
  }
</style>
`;
