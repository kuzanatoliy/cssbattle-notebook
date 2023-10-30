module.exports = `
<dl><dl><dl><dl>
<style>
  * {
    background: #872626;
    border-radius: 9in;
  }
  * * {
    background: #E3745D;
  }
  body {
    margin: 125px 175px;
    outline: solid #E3745D 20px;
    outline-offset: 40px;
  }
  dl {
    position: absolute;
    height: 60px;
    width: 20px;
    inset: 45px 190px;
    rotate: 90deg;
    transform-origin: 10px 105px;
    margin: 0;
  }
  dl > dl {
    inset: 0;
  }
</style>
`;
