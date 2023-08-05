module.exports = `
<p><p><p a><p a>
<style>
  * {
    background: #E3516E;
    border-radius: 9in;
  }
  body {
    margin: 50px 100px;
    box-shadow: inset 0 0 0 70px #FADE8B;
  }
  p {
    position: fixed;
    height: 30px;
    width: 20px;
    left: 190px;
    top: 54px;
    -webkit-box-reflect: below 100px;
  }
  p + p {
    rotate: 90deg;
    left: 255px;
    top: 119px;
  }
  [a] {
    rotate: -45deg;
    left: 144px;
    top: 73px;
  }
  [a] + [a] {
    rotate: 45deg;
    left: 235px;
  }
</style>
`;
