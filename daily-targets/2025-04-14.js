module.exports = `
<p><p><p><dl></dl>
<style>
  * {
    background: #343400;
    body {
      background: #469DBA;
      margin: 70px 75px;
      padding: 65px 20px;
      border-radius: 50%;
      p {
        float: left;
        padding: 15px;
        margin: 0 20px;
        border-radius: 50%;
        & + dl {
          position: fixed;
          padding: 20px;
          left: 90px;
          top: 154px;
          background: #469DBA;
        }
      }
    }
  }
</style>
`;
