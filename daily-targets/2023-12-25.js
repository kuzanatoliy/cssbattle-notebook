module.exports = `
<p><p><p><dl>
<style>
  * {
    background: #14313E;
  }
  * * {
    background: #BD3E4B;
    border-radius: 9in;
    margin: 120px 110px;
  }
  p {
    z-index: -1;
    position: fixed;
    margin: 0;
    height: 80px;
    width: 80px;
    top: 50px;
    left: 160px;
  }
  p + p {
    height: 60px;
    width: 130px;
    top: 150px;
    left: 160px;
    transform-origin: 40px 50%;
    rotate: 45deg;
  }
  p + p + p {
    rotate: 135deg;
  }
  dl {
    margin: 80px;
    height: 20px;
    box-shadow: 0 20px #F16348, 0 50px #F16348, -5vh -42px #14313E, 5vh -42px #14313E;
  }
</style>
`;
