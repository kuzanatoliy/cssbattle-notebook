module.exports = `
<p><p>
<style>
  * {
    background: #668884;
    color: #668884;
    body {
      background: #EED9D9;
      margin: 30px 55px 30px 70px;
      p {
        float: left;
        padding: 30px 35px;
        margin: 40px 0 0 40px;
        box-shadow: 0 25vw, 0 35vw;
        & + p {
          padding-block: 100px;
          box-shadow: -7.5px -50px 0 -7.5px, 110px 0;
        }
      }
    }
  }
</style>
`;
