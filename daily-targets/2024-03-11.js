module.exports = `
<p><p><p><dl>
<style>
  * {
    background: #FAD3E5;
    color: #8B0051;
  }
  body {
    margin: 100px 70px;
  }
  dl {
    position: fixed;
    width: 20px;
    height: 100px;
    margin: -120px 120px;
    box-shadow: 0 -25vw, 0 25vw;
  }
  p {
    height: 20px;
    outline: solid 5vw;
    margin: 20px 80px;
    width: 100px;
    & + p {
      width: 180px;
      margin: 20px 40px;
      & + p {
        width: 260px;
        margin: 20px 0;
      }
    }
  }
</style>
`;
