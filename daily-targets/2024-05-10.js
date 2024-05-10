module.exports = `
<p a><p><p b>
<style>
  * {
    background: #512B2A;
    body, [b] {
      background: #EA6B62;
    }
    body {
      margin: 90px 100px;
      border-radius: 5vw;
      padding: 30px;
    }
    p {
      height: 60px;
      width: 100px;
    }
    [a] {
      border-radius: 10px;
    }
    p + p {
      position: fixed;
      top: 114px;
      right: 130px;
      height: 40px;
      clip-path: polygon(0 50%, 100% 0, 100% 100%);
      width: 60px;
    }
    [b] {
      clip-path: polygon(0 0, 100% 0, 0 100%);
      top: 190px;
      left: 130px;
      height: 44px;
      width: 44px;
    }
  }
</style>
`;
