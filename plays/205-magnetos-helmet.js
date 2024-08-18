module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #232323);
    body {
      background: #AF3A3A;
      margin: 34px 120px 28px;
      border-radius: 9in 9in 0 0;
      clip-path: polygon(0 0, 100% 0, 100% 214px, 122px 100%, 50% 170px, 38px 100%, 0 214px);
    }
    p {
      position: relative;
      height: 70px;
      top: 53px;
      margin: 0 20px;
      border-radius: 50%;
    }
    p + p {
      top: -32px;
      margin: 0 46px;
      height: 30px;
      background: #AF3A3A;
    }
    p + p + p {
      border-radius: 0;
      top: 10px;
      margin: 0 45px;
      height: 104px;
      background: #232323;
    }
  }
</style>
`;
