module.exports = `
<dl><p><p><p></dl><dl a><p><p><p></dl><dl b><p><p><p></dl><dl c><p><p><p>
<style>
  * {
    margin: 0;
    position: fixed;
  }
  body {
    background: #66284A;
    margin: 40px 150px;
  }
  dl {
    width: 100px;
    height: 100px;
    transform-origin: 50% 110%;
  }
  p {
    width: 50px;
    height: 50px;
    background: radial-gradient(at 100% 100%, #66284A 32q, 0, var(--c, #F0CD48) 53q, 0, #66284A);
    transform-origin: 100% 100%;
  }
  p + p, [a] {
    rotate: 90deg;
  }
  p + p + p, [b] {
    rotate: 180deg;
  }
  [c] {
    rotate: 270deg;
  }
  [a] {
    --c: #D669EC;
  }
  [b] {
    --c: #FDFBF8;
  }
  [c] {
    --c: #D86F45;
  }
</style>
`;
