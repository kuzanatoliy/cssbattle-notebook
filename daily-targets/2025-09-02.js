module.exports = `
<p><dl>
<style>
  * {
    background: #5DBCF9;
    margin: 0;
    body {
      margin: -20px 60px;
      border-radius: 50% 50% 50% 50%;
      border: solid 50px #FFFFCD;
      padding: 30px 65px;
      p {
        background: #FFFFCD;
        height: 180px;
        & + dl {
          position: fixed;
          inset: 0;
          height: 60px;
          box-shadow: 0 80vh #5DBCF9;
        }
      }
    }
  }
</style>
`;
