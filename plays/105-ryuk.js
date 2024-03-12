module.exports = `
<p><dl><dl>
<style>
  * {
    background: var(--b, #BAC7CE);
    margin: 0;
  }
  body {
    margin: 130px 250px 50px 30px;
    -webkit-box-reflect: right 25vw;
  }
  p {
    position: fixed;
    height: 150px;
    width: 150px;
    --b: #475862;
    inset: -90px 125px;
    rotate: 45deg;
  }
  dl {
    --b: #000;
    height: 100px;
    border-radius: 0 50%;
    rotate: -15deg;
    padding: 10px;
    & dl {
      rotate: 15deg;
      border-radius: 9in;
      --b: radial-gradient(#4E2B24 5vh, 0, #000 20px, 0, #868A64);
      height: 80px;
      box-shadow: inset 0 5vh #5A6042;
    }
  }
</style>
`;
