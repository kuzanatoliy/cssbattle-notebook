module.exports = `
<p><p><p b>
<style>
  * {
    background: #8647E6;
  }
  * * {
    background: #EFEB99;
  }
  body {
    clip-path: circle(25vw);
  }
  p {
    position: fixed;
    height: 60px;
    width: 60px;
    inset: 84px 150px;
    border: solid 20px #8647E6;
  }
  p + p {
    inset: 4px 230px;
  }
  [b] {
    inset: 164px 70px;
  }
</style>
`;
