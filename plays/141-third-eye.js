module.exports = `
<p><p><p a>
<style>
  * {
    background: #E3516E;
  }
  p {
    margin: 0;
    position: fixed;
    height: 150px;
    width: 150px;
    background: #D9D9D9;
    border-radius: 9in;
    top: -75px;
    left: -75px;
  }
  p + p {
    top: 225px;
    left: 325px;
  }
  [a] {
    height: 100px;
    width: 100px;
    top: 100px;
    left: 150px;
    border-radius: 0 9in;
    rotate: -45deg;
  }
</style>
`;
