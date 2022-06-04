module.exports = `
<div></div><div></div><div></div>
<style>
  body {
    margin: 0;
    background: #0B2429;
    position: relative;
  }
  div {
    position: absolute;
    right: 80px;
    top: 30px;
    width: 120px;
    height: 120px;
    background: #F3AC3C;
    border-radius: 50% 50% 50% 0;
  }
  div + div {
    right: 140px;
    top: 90px;
    transform: rotate(0.5turn);
  }
  div + div + div {
    right: 200px;
    top: 150px;
  }
  div:nth-of-type(2n) {
    background: #998235;
  }
</style>
`
