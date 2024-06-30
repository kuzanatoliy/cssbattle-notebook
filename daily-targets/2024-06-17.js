module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  * {
    margin: 0;
    background: #EFF8FE;
    body {
      background: linear-gradient(90deg, #4F77FF 5vw, 0, #EFF8FE 10vh, 0, #4F77FF 100vh, 0, #EFF8FE 310px, 0, #4F77FF);
      margin: 60px 35px;
      padding: 10px 40px;
    }
    p {
      height: 75px;
      width: 165px;
      float: left;
      & + p {
        width: 75px;
        margin-left: 10px;
        border-radius: 9in;
      }
    }
    dl {
      background: #4F77FF;
      height: 75px;
      & + dl {
        margin-top: 10px;
        scale: -1;
      }
    }
  }
</style>
`;
