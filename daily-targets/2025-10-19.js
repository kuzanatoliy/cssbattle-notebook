module.exports = `
<p><p>
<style>
  * {
    background: #1A4341;
    color: #5A9F48;
    body {
      margin: 85px 165px 115px 135px;
      box-shadow: 5vh 5vh 0 5vh;
      p {
        padding: 25px 50px;
        border: solid 30px;
        border-bottom: none;
        border-radius: 9in 9in 0 0;
        position: fixed;
        top: -11px;
        left: 235px;
        & + p {
          top: 199px;
          left: 5px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
