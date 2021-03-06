module.exports = `
<div><p a><p a><p b>
<style>
  body {
    height: 200px;
    margin: 50px 100px;
    background: #293462;
  }
  div {
    position: relative;
    height: 100%;
    background: #FE5F55;
    border-radius: 100% 100% 50% 50%;
    overflow: hidden;
  }
  p {
    width: 60px;
    height: 60px;
    background: #FFF1C1;
    border-radius: 50%;
    position: absolute;
    top: 74px;
    left: 20px;
  }
  p + p {
    left: 120px;
  }
  [a] {
    box-shadow: 0px -120px 0 20px #FFF1C1;
  }
  [b] {
    width: 40px;
    height: 10px;
    top: 154px;
    left: 80px;
    border-radius: 10px;
  }
</style>
`;
