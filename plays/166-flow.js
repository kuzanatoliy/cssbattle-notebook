module.exports = `
<p><a><a><p><p a><a><a><p><p><a><a>
<style>
  * {
    border-radius: 9in;
    background: #D86F45;
  }
  body {
    background: #FDFBF8;
    margin: -100px 100px 30px;
  }
  p {
    margin: 0;
    float: left;
    width: 30px;
    height: 285px;
  }
  [a] {
    width: 80px;
    height: 305px;
  }
  a {
    display: block;
    height: 225px;
    width: 100%;
    background: #FDFBF8;
  }
  a + a {
    margin: 30px 0;
    height: 30px;
  }
  [a] a {
    height: 200px;
  }
  [a] a + a {
    height: 80px;
  }
</style>
`;
