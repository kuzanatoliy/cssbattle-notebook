module.exports = `
<p><a><p><a a><p b>
<style>
  * {
    background: #F3AC3C;
    color: #1A4341;
    border-radius: 10px;
  }
  p, a {
    position: fixed;
    background: #1A4341;
    height: 100px;
    width: 100px;
    top: 49px;
    left: 65px;
  }
  a {
    display: block;
    height: 50px;
    width: 50px;
    margin: 16px 100px;
  }
  p + p {
    top: 119px;
    left: 235px;
  }
  [a] {
    margin: 136px 120px;
  }
  [b] {
    background: inherit;
    height: 70px;
    width: 70px;
    top: 99px;
    left: 165px;
    box-shadow: -50px -50px, 50px 50px;
  }
</style>
`;
