module.exports = `
<p><p>
<style>
  * {
    background: #F1D36F;
    * {
      border-radius: 10px;
      background: #333;
      margin: 75px 80px;
      * {
        position: relative;
        top: -25px;
        padding: 25px;
        margin: 0px 60px;
        & + * {
          border: solid 5vw #F1D36F;
          padding: 30px;
          margin: 0 70px;
          border-radius: 9in;
        }
      }
    }
  }
</style>
`;
