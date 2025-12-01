module.exports = `
<p><p>
<style>
  * {
    background: #050044;
    body {
      border: solid 40px #F3EAD2;
      border-radius: 9in;
      margin: 30px 110px 90px;
      p {
        position: fixed;
        padding: 20px 130px;
        top: -6px;
        left: 70px;
        box-shadow: 0 40px #A4215D;
        & + p {
          top: 234px;
          left: 50px;
          padding: 20px 150px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
