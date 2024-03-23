module.exports = `
<p><p><p>
<style>
  * {
    background: #F3AC3C;
    margin: 0;
  }
  p {
    position: fixed;
    height: 80px;
    width: 80px;
    background: #254241;
    border-radius: 9in 9in 0 9in;
    rotate: 45deg;
    top: 40px;
    left: 160px;
    & + p {
      rotate: 225deg;
      top: 180px;
      left: 160px;
      & + p {
        rotate: 315deg;
        top: 110px;
        left: 80px;
      }
    }
  }
</style>
`;
