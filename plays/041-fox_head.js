module.exports = `
<p a><p a><p b><p b>
<style>
  * {
    height: 140px;
    margin: 0;
    background: #293462;
  }
  body {
    margin: 80px 150px;
  }
  [b] {
    position: fixed;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 60px 15px;
  }
  [b] + [b] {
    left: 190px;
  }
  [a] {
    width: 50%;
    height: 100%;
    float: left;
    border-radius: 0 40px 0 0;
    box-shadow: inset 0 100px #FE5F55;
  }
  [a] + [a] {
    transform: rotateY(180deg);
  }
</style>
`;
