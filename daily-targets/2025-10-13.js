module.exports = `
<p><p>
<style>
  * {
    background: #4A9A86;
    color: #FAE29E;
    * {
      margin: 30px 140px;
      box-shadow: -40px 0, 40px 0;
      p {
        position: fixed;
        padding: 30px;
        border-radius: 9in;
        top: 50px;
        left: 110px;
        box-shadow: 0 0 0 30px;
        & + p {
          left: -50px;
          top: 130px;
        }
      }
    }
  }
</style>
`;
