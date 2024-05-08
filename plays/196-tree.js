module.exports = `
<p><p><p t><p r><p r t>
<style>
  * {
    background: #90D3A6;
    * {
      background: #024817;
      margin: 60px 190px;
      border-radius: 9in;
    }
    p {
      position: fixed;
      height: 20px;
      width: 200px;
      margin: 160px -90px;
    }
    p + p {
      position: fixed;
      height: 20px;
      width: 65px;
      margin: 96px -46px;
      rotate: 30deg;
    }
    [t] {
      margin-top: 46px;
    }
    [r] {
      margin-left: 1px;
      rotate: -30deg;
    }
  }
</style>
`;
