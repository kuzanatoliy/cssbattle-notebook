module.exports = `
<p><p>
<style>
  * {
    background: #C0A623;
    body {
      background: #4A4A23;
      margin: 50px 100px;
      border-radius: 30px;
      p {
        margin: 0;
        position: fixed;
        inset: 90px 170px;
        background: #D9D9D9;
        & + p {
          inset: 30px 185px;
          background: #4A4A23;
        }
      }
    }
  }
</style>
`;
