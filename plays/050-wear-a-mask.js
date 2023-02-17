module.exports = `
<p><div><p><p><p>
<style>
  * {
    background: #293462;
  }
  p, div {
    position: absolute;
  }
  p {
    top: 84px;
    left: 65px;
    width: 250px;
    height: 41px;
    border: 10px solid #FFF1C1;
    border-radius: 30px;
  }
  div {
    top: 101px;
    left: 125px;
    width: 150px;
    height: 99px;
    background: #FFF1C1;
    border-radius: 0 0 50px 50px;
  }
  div p {
    border: 0;
    background: #FE5F55;
    width: 40px;
    height: 10px;
    top: 3px;
    left: 20px;
  }
  p + p {
    top: 23px;
  }
  p + p + p {
    left: 90px;
    height: 40px;
  }
</style>
`;
