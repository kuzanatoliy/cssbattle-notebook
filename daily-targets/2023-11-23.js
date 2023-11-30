module.exports = `
<p><p>
<style>
  * {
    background: #811E1F;
  }
  * * {
    background: #F1F1F2;
  }
  body {
    margin: 90px 180px;
  }
  p {
    margin: 0;
    position: fixed;
    width: 120px;
    height: 40px;
    top: 130px;
    left: 140px;
  }
  p + p {
    width: 40px;
    color: #F1F1F2;
    box-shadow: -20vh 0, 35vw 0, 10vw -25vw, 10vw 25vw, -5vw -20vh, 25vw -20vh, -5vw 20vh, 25vw 20vh;
  }
</style>
`;
