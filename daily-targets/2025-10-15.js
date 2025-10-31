module.exports = `
<p><p><p>
<style>
  * {
    background: #EEC8EA;
    color: #8E2C88;
    body {
      margin: 15px 75px;
      box-shadow: -60px 0, 60px 0;
      p {
        background: #8E2C88;
        margin: 0 0 0 15px;
        height: 60px;
        & + p {
          margin-top: 45px;
        }
      }
    }
  }
</style>
`;
