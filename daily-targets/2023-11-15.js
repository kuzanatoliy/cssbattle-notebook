module.exports = `
<p><p><p a><p a>
<style>
  * {
    background: #2C4228;
  }
  body {
    background: #A6CE39;
    margin: 60px 125px 120px;
    padding: 0 15px;
  }
  p {
    height: 90px;
    width: 30px;
    float: left;
    margin: 0 15px;
  }
  [a] {
    position: relative;
    height: 30px;
    width: 210px;
    margin: -60px;
  }
  [a] + [a] {
    rotate: 90deg;
    background: #A6CE39;
    margin: 60px -45px;
  }
</style>
`;
