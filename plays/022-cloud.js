module.exports = `
<p><p>
<style>
  * {
    background: #F5D6B4;
    * {
      background: #D86F45;
      border-radius: 9in;
      margin: 165px 100px 85px 125px;
      * {
        position: fixed;
        padding: 50px;
        top: -50px;
        left: -25px;
        & + * {
          top: -80px;
          left: 55px;
        }
      }
    }
  }
</style>
`;
