module.exports = `
<div><p><p><dl>
<style>
  * {
    border-radius: 9in;
    background: var(--b, #6CB3A9);
  }
  body {
    margin: 50px 100px;
  }
  div {
    height: 100%;
    --b: linear-gradient(90deg, #6CB3A9 10px, 0, #781728 190px, 0, #6CB3A9);
    overflow: hidden;
  }
  p {
    margin: 0;
    border-radius: 0;
    height: 90px;
    --b: #D25B70;
  }
  p + p {
    margin-top: 20px;
    --b: #FFF;
  }
  dl {
    width: 50px;
    height: 50px;
    --b: #F6DF96;
    position: relative;
    top: -141px;
    left: 75px;
    box-shadow: 0 0 0 10px #781728;
  }
</style>
`;
