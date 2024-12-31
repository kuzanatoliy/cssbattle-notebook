module.exports = `
<p><p><p>
<style>
  * {
    background: #5DBCF9;
    * {
      background: #FFF;
      margin: 90px 180px;
      p {
        position: fixed;
        height: 300px;
        width: 40px;
        margin: -90px -140px;
      }
      p + p {
        height: 40px;
        width: 120px;
        margin: -50px -180px;
      }
      p + p + p {
        margin-top: 130px;
      }
    }
  }
</style>
`;
