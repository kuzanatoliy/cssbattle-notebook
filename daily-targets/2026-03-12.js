module.exports = `
<p><p>
<style>
  * {
    background: #48BF7D;
    color: #48BF7D;
    * {
      background: #EFF8FE;
      margin: 20px;
      * {
        height: 90px;
        margin: 0 250px 0 0;
        box-shadow: 250px 0, 0 170px;
        & + p {
          height: 60px;
          margin: 10px 110px;
          box-shadow: 0 -40px, 0 40px;
        }
      }
    }
  }
</style>
`;
