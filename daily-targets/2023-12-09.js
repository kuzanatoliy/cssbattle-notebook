module.exports = `
<dl><p>
<style>
  * {
    background: var(--b, #302562);
  }
  * * {
    --b: linear-gradient(#0098D1 10vw, 0, #302562 15vw, 0, #0098D1);
  }
  body {
    margin: 100px 90px;
    rotate: 45deg;
  }
  dl {
    height: 100%;
    rotate: 90deg;
  }
  p {
    --b: #0098D1;
    height: 60px;
    width: 60px;
    position: relative;
    inset: 5vw 20vw;
    outline: solid 10vw #302562;
  }
</style>
`;
