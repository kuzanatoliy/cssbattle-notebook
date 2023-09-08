module.exports = `
<dl><p><p><p a></dl><dl><p><p><p a>
<style>
  * {
    position: absolute;
    margin: 0;
    background: #8D1C24;
  }
  dl {
    top: 65px;
    left: 80px;
  }
  p {
    background: #EC9140;
    width: 70px;
    height: 70px;
    border-radius: 9in 0 0;
    transform-origin: 100% 100%;
  }
  p + p {
    rotate: 90deg;
  }
  [a] {
    rotate: -90deg;
  }
  dl + dl {
    rotate: 180deg;
    top: 235px;
    left: 320px;
  }
</style>
`;
