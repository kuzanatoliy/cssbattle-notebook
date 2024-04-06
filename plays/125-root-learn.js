module.exports = `
<p a><p b><p c>
<style>
  body {
    background: #eff2f1;
  }
  p {
    margin: 0;
    position: absolute;
  }
  [a] {
    left: 130px;
    top: 60px;
    width: 40px;
    height: 180px;
    background: #1c1c1c;
    -webkit-box-reflect: right -40px;
  }
  [a]:before,
  [a]:after {
    content: "";
    position: absolute;
    left: -20px;
    width: 20px;
    height: 20px;
    background: #1c1c1c;
  }
  [a]:before {
    top: 0;
    clip-path: polygon(0 45%, 100% 103%, 100% 0, 0 0);
  }
  [a]:after {
    bottom: 0;
    clip-path: polygon(100% -3%, 100% 100%, 0 100%, 0 55%);
  }
  [b] {
    left: 170px;
    top: 60px;
    width: 90px;
    height: 90px;
    border-radius: 0 50% 50% 0;
    background: #1c1c1c;
  }
  [b]:after {
    content: "";
    position: absolute;
    left: 0;
    top: 15px;
    width: 50px;
    height: 60px;
    background: #eff2f1;
    border-radius: 0 50px 50px 0;
  }
  [c] {
    left: 203px;
    top: 140px;
    width: 46px;
    height: 100px;
    background: #1c1c1c;
    transform: skew(30deg);
  }
  [c]:after {
    content: "";
    position: absolute;
    right: -15px;
    bottom: 0px;
    width: 20px;
    height: 25px;
    background: #1c1c1c;
    clip-path: polygon(0% 0, 100% 75%, 85% 100%, 0 100%);
  }
</style>
`;
