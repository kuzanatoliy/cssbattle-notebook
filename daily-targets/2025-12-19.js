module.exports = `
<p><p>
<style>
  * {
    background: #7E6293;
    border: solid #E8BA79;
    border-width: 0 0 5vw 5vw;
    margin: 35px;
    body {
      scale: -1;
    }
    * {
      margin: 10vw 10vw 0 0;
      p {
        margin: 0 0 0 30px;
        height: 100px;
        & + p {
          position: fixed;
          height: 20px;
          width: 20px;
          background: #E8BA79;
          inset: 170px -90px;
        }
      }
    }
  }
</style>
`;
