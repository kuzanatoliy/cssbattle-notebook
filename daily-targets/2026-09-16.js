module.exports = `
<p><p>
<style>
  * {
    background: #FAE29E;
    body {
      border-radius: 50px 50px 0 0;
    }
    * {
      background: #743F3F;
      margin: 100px 85px;
      p {
        position: fixed;
        padding: 15px 60px;
        top: -40px;
        left: 55px;
        & + p {
          background: #FAE29E;
          top: 60px;
          border: solid 10px #743F3F;
          padding: 25px 50px;
        }
      }
    }
  }
</style>
`;
