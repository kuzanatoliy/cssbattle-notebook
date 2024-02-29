module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #F27826);
    border-radius: 20px;
  }
  body {
    margin: 75px;
    --b: #FED820;
  }
  p {
    margin: 0;
    position: fixed;
    --b: #FFFFA4;
    width: 30px;
    height: 30px;
    inset: 105px;
    color: #F27826;
    box-shadow: -45px 15px;
  }
  p + p {
    width: 50px;
    height: 50px;
    inset: 135px 215px;
    border-radius: 9in;
    box-shadow: 85px 15px;
  }
</style>
`;
