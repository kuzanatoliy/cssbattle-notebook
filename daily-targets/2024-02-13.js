module.exports = `
<p><p>
<style>
  * {
    background: #4A1818;
  }
  * * {
    background: #C31C1D;
    color: #C31C1D;
  }
  body {
    margin: 60px 160px 160px;
    border-radius: 9in;
    box-shadow: -70px 25vw, 70px 25vw;
  }
  p {
    position: fixed;
    width: 20px;
    height: 250px;
    left: 190px;
    & + p {
      width: 120px;
      height: 20px;
      left: 150px;
      top: 174px;
    }
  }
</style>
`;
