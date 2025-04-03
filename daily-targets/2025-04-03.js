module.exports = `
<p><p>
<style>
  * {
    background: #F5E3B5;
    * {
      background: #469DBA;
      margin: 90px 120px;
      padding: 20px;
      p {
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 9in;
        margin: 0 -60px;
        & + p {
          width: 150px;
          height: 0;
          margin: 0 100px;
          border: solid 20px #F5E3B5;
        }
      }
    }
  }
</style>
`;
