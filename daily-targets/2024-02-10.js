module.exports = `
<p><p><p>
<style>
  * {
    background: #024817;
    margin: 0;
  }
  body {
    background: #fff;
    margin: 60px 110px;
  }
  p {
    position: fixed;
    height: 60px;
    width: 30px;
    top: 90px;
    left: 170px;
    & + p {
      left: 230px;
      & + p {
        height: 30px;
        width: 120px;
        top: 180px;
        left: 140px;
      }
    }
  }
</style>
`;
