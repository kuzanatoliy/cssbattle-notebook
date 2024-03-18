module.exports = `
<p><p>
<style>
  * {
    background: #C31C1D;
    body {
      background: #660301;
      margin: 70px 80px;
      clip-path: polygon(25% 0, 75% 0, 100% 100%, 0 100%);
    }
  }
  p {
    position: relative;
    height: 40px;
    width: 40px;
    margin: 0 100px;
    top: 80px;
  }
  p + p {
    width: 120px;
    margin: 0 60px;
  }
</style>
`;
