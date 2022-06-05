module.exports = `
<div><p><p></div><div><p><p></div>
<style>
  body {
    margin: 44px 0 0 110px;
    background: #998235;
  }
  div {
    float: left;
    margin-right: 20px;
  }
  div + div {
    transform: rotate(180deg) rotateY(180deg);
  }
  p {
    width: 80px;
    height: 100px;
    background: #1A4341;
    border-radius: 0 50px;
  }
  p + p {
    height: 60px;
    background: #F3AC3C;
    margin-top: 20px;
  }
</style>
`;
