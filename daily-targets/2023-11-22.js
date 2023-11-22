module.exports = `
<dl><p><p><dl>
<style>
  * {
    background: #602054;
    border: solid var(--b) #ECDFEA;
    position: relative;
  }
  body {
    margin: 60px 40px;
  }
  dl {
    height: 140px;
    margin: 20px;
    --b: 20px;
  }
  dl > dl {
    height: 60px;
  }
  p {
    --b: 10px;
    position: absolute;
    width: 260px;
    left: -20px;
    top: 44px;
    color: #602054;
    box-shadow: 0 20px, 0 -20px;
  }
  p + p {
    rotate: 90deg;
    width: 160px;
    left: 30px;
  }
</style>
`;
