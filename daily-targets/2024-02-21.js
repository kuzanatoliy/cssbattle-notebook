module.exports = `
<p b><p a><p c><p c>
<style>
  * {
    background: #ACDDF9;
  }
  body {
    background: #0A6B91;
    margin: 88px 100px 87px;
    clip-path: polygon(0 0, 82% 0, 100% 28%, 100% 100%, 0 100%);
  }
  [b] {
    border-radius: 10px;
  }
  [a] {
    height: 5px;
    margin: 60px 25px;
  }
  [c] {
    width: 5px;
    margin: 25px 50px;
  }
  [c] + p {
    margin: 25px 95px;
  }
  p {
    position: fixed;
    width: 100px;
    height: 75px;
    margin: 25px;
  }
  p + p {
    background: #0A6B91;
  }
</style>
`;
