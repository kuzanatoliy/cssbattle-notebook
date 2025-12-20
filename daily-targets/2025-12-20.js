module.exports = `
<p><p>
<style>
  * {
    background: #1C204E;
    body {
      background: #FEF7F5;
      border: solid 30px #E7772F;
      border-radius: 9in;
      margin: 50px 100px;
      padding: 24px 20px;
      p {
        float: left;
        padding: 30px 10px;
        & + p {
          margin-left: 60px;
        }
      }
    }
  }
</style>
`;
