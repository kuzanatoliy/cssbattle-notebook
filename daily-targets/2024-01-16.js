module.exports = `
<dl></dl><p><p>
<style>
  * {
    margin: 0;
    background: var(--b, #002A6B);
  }
  body {
    margin: 75px 80px; 
  }
  dl {
    --b: #5CC4F4;
    height: 60%;
    clip-path: polygon(37% 0, 63% 0, 100% 100%, 0 100%);
  }
  p {
    --b: #C7E7FB;
    position: fixed;
    width: 180px;
    height: 90px;
    inset: 75px 110px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  p + p {
    inset: 165px 140px;
    width: 120px;
    height: 60px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 0, 0 100%);
  }
</style>
`;
