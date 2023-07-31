module.exports = `
<p><a><a><p>
<style>
  * {
    margin: 0;
    background: #F8B140;
  }
  body {
    background: #926927;
  }
  p {
    margin: 80px 0;
    height: 30px;
    width: 160px;
    float: left;
  }
  a {
    display: block;
    width: 30px;
    height: 120px;
    border-radius: 1in;
    margin: 0 130px;
  }
  a + a {
    margin: -130px 185px;
    height: 160px;
  }
  p + p {
    scale: -1;
    margin: 0 240px;
  }
</style>
`;
