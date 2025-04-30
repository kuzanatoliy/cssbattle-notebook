module.exports = `
<p><p><p>
<style>
  * {
    background: #FFF;
    * {
      background: #BDC8D1;
      margin: 52px 30px;
      outline: solid 5vw #FFF;
      p {
        margin: 0;
        width: 100px;
        height: 140px;
        float: left;
        & + p {
          margin-left: 20px;
        }
      }
    }
  }
</style>
`;
