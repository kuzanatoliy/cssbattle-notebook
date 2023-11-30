module.exports = `
<p><p><p a><p>
<style>
  * {
    background: #7B3738;
  }
  body {
    border-radius: 9in;
  }
  * * {
    box-shadow: inset 0 0 0 40px #FCAF17;
    margin: 80px 130px;
  }
  p {
    position: fixed;
    width: 40px;
    height: 250px;
    margin: 0;
    top: 150px;
    transform-origin: 70px 0;
  }
  p + p {
    rotate: 90deg;
  }
  [a] {
    rotate: 180deg;
  }
  [a] + p {
    rotate: 270deg;
  }
</style>
`;
