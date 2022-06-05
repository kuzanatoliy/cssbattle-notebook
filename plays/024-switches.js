module.exports = `
<p a><p b><p c><p d>
<style>
  * {
    margin: 0;
    background: #62306D;
  }
  p {
    position: fixed;
    width: 100px;
    height: 100px;
    top: 100px;
    left: 80px;
    background: #F7EC7D;
    border-radius: 100px;
  }
  [c], [b] {
    left: 220px;
  }
  [a], [b] {
    height: 150px;
  }
  [a] {
    top: 50px;
    background: #AA445F;
  }
  [b] {
    left: 220px;
    background: #E38F66;
  }
</style>
`;
