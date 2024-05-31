module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  * {
    background: #4F77FF;
    margin: 0;
    position: fixed;
    p {
      height: 110px;
      width: 30px;
      background: #FFF;
      margin: -90px -30px;
    }
    p + p {
      transform-origin: 50% 25vh;
      rotate: -90deg;
    }
    dl {
      border: solid 30px #FFF;
      height: 40px;
      width: 40px;
      border-radius: 9in;
      inset: 60px;
      & + dl {
        inset: 35vw 60vw;
        scale: -1;
      }
    }
  }
</style>
`;
