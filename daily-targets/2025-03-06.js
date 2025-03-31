module.exports = `
<p><p>
<style>
  * {
    background: #E8AD6D;
    body {
      background: #DE6B67;
      margin: 0 145px;
      outline: solid 40px #DE6B67;
      outline-offset: 5vw;
      padding: 80px 35px;
      p {
        padding: 15px 20px;
        margin: 0;
        clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
        & + p {
          margin-top: 80px;
        }
      }
    }
  }
</style>
`;
