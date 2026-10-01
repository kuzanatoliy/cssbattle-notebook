module.exports = `
<p><p>
<style>
  * {
    background: #51A499;
    color: #51A499;
    body {
      background: #FEE190;
      margin: 50px 60px 40px;
      padding: 60px;
      p {
        margin: 0;
        height: 80px;
        box-shadow: 0 -30vw, 0 30vw;
        & + p {
          position: fixed;
          inset: 0;
          width: 80px;
          height: 250px;
          box-shadow: 80vw 0;
        }
      }
    }
  }
</style>
`;
