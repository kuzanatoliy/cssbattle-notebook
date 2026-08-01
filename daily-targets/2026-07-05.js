module.exports = `
<p><dl><p>
<style>
  * {
    background: #3450AE;
    * {
      position: fixed;
      border: solid 20px #F7EC7D;
      margin: 10px;
      top: 30px;
      left: 50px;
      padding: 30px 120px;
      border-radius: 9in;
      p {
        padding: 0;
        border-width: 15px;
        top: 65px;
        left: 265px;
        & + * {
          top: 150px;
          p {
            top: 185px;
            left: 85px;
          }
        }
      }
    }
  }
</style>
`;
