module.exports = `
<p><dl><div>
<style>
  * {
    background: #CBE8DD;
    position: fixed;
  }
  p {
    border: solid 40px transparent;
    border-left: solid 40px #007192;
    margin: 102px 62px;
    -webkit-box-reflect: right 100px;
  }
  dl {
    width: 180px;
    height: 100px;
    background: #007192;
    margin: 92px 102px;
    border-radius: 10px;
    box-shadow: 0 0 0 10px #CBE8DD;
  }
  div {
    background: repeating-linear-gradient(90deg, #CBE8DD 0px, #CBE8DD 10px, 0, #007192 20px);
    width: 90px;
    height: 100px;
    transform: skewX(-20deg);
    margin: 0 45px;
  }
</style>
`;
