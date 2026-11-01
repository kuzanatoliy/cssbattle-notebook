module.exports = `
<p><p>
<style>
  * {
    background: #73493A;
    * {
      background: #FEF9CE;
      margin: 65px 115px;
      scale: -1;
      p {
        float: left;
        background: #A6BA86;
        padding: 25px 30;
        margin: 0;
        & + p {
          margin-left: 50px;
        }
      }
    }
  }
</style>
`;
