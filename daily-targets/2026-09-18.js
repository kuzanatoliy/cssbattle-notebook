module.exports = `
<p><p>
<style>
  body {
    border-radius: 40px 0 0 40px;
  }
  * * {
    background: #4C4C6B;
    border: solid #FAE29E;
    border-width: 20px 0 20px 20px;
    margin: 40px 160px 40px 120px;
    * {
      height: 30px;
      margin: 50px -90px 0 30px;
      border-width: 0 20px 20px 0;
      & + p {
        margin-top: -20px;
        scale: 1 -1;
      }
    }
  }
</style>
`;
