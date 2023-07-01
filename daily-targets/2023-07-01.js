module.exports = `
<p><p><p a><p a>
<style>
  * {
    margin: 0;
    background: #62306D;
  }
  body {
    margin: 80px 110px;
  }
  div {
    width: 100px;
    height: 100px;
    background: #dd6b4d;
  }
  p {
    width: 80px;
    height: 80px;
    background: #F7EC7D;
  }
  p + p {
    width: 160px;
  }
  [a] {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 99q;
    top: 60px;
    left: 270px;
  }
  [a] + [a] {
    width: 60px;
    height: 60px;
    top: 80px;
    left: 210px;
  }
</style>
`;
