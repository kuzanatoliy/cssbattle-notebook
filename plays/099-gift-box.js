module.exports = `
<p><p><p b>
<style>
  * {
    background: #AC474B;
  }
  body {
    background: #FFF;
    margin: 110px 130px 50px;
  }
  p {
    position: fixed;
    height: 20px;
    width: 100%;
    top: 154px;
    left: 0;
  }
  p + p {
    rotate: 90deg;
  }
  [b] {
    width: 20px;
    top: 34px;
    left: 165px;
    border-radius: 9in 0 9in 9in;
    border: solid 10px #FFF;
    -webkit-box-reflect: above -10px;
  }
</style>
`;
