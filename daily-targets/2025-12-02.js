module.exports = `
<p><p>
<style>
  html {
    background: #696448;
    body {
      background: #FFF;
      margin: 100px 180px;
      p {
        position: fixed;
        border-radius: 9in;
        border: solid 30px #222;
        padding: 40px;
        top: 64px;
        left: 100px;
        & + p {
          left: 160px;
        }
      }
    }
  }
</style>
`;
