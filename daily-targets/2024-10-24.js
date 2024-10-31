module.exports = `
<p><p><p a><p a>
<style>
  * {
    background: #434B92;
    margin: 0;
    p {
      background: #F3AC3C;
      position: fixed;
      height: 50px;
      width: 400px;
      margin: 125px 0;
    }
    p + p {
      rotate: 90deg;
    }
    [a] {
      height: 100px;
      width: 190px;
      margin: 100px 105px;
    }
    [a] + [a] {
      rotate: 0deg;
    }
  }
</style>
`;
