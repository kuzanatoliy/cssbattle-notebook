module.exports = `
<dl><p><p><dl><p><p><dl><p><p><dl><p><p>
<style>
  * {
    background: #F48B26;
    margin: 0;
  }
  dl {
    height: 150px;
    width: 200px;
    transform-origin: 100% 100%;
    & > dl {
      rotate: 90deg;
    }
  }
  p {
    background: #FFF;
    position: fixed;
    height: 30px;
    width: 120px;
    border-radius: 9in;
    top: 80px;
    left: 110px;
    z-index: 1;
  }
  p + p {
    height: 90px;
    width: 30px;
    top: 50px;
    left: 200px;
  }
</style>
`;
