module.exports = `
<p><p>
<style>
  * {
    background: #6C1715;
    body {
      height: 60px;
      width: 60px;
      border-radius: 9in;
      margin: 60px 170px;
      outline: solid 20px #C8393A;
    }
    p {
      position: fixed;
      background: #C8393A;
      width: 20px;
      height: 50px;
      top: 120px;
      left: 190px;
    }
    p + p {
      width: 150px;
      height: 80px;
      top: 164px;
      left: 125px;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
  }
</style>
`;
