module.exports = `
<dl><p c><p>
<style>
  * {
    background: #E6E9E3;
    margin: 0;
    body {
      background: #61A74E;
      margin: 34px 80px 26px;
      padding: 55px;
    }
    body, dl {
      border-radius: 9in;
      border: solid 10px #33572B;
    }
    dl {
      height: 90px;
    }
    p {
      position: fixed;
      height: 55px;
      width: 105px;
      margin: 92px -8px;
    }
    [c] {
      background: #33572B;
      clip-path: polygon(25px 0, 80px 0, 100% 100%, 0 100%);
    }
    p + p {
      height: 120px;
      margin: 52px -8px;
      clip-path: polygon(0 100%, 50% 0, 100% 100%);
    }
  }
</style>
`;
