module.exports = `
<p><p>
<style>
  * {
    background: #FDFBF8;
    border-radius: var(--r);
  }
  body {
    background: #D86F45;
    margin: 50px 120px;
    padding: 20px;
    --r: 20px;
  }
  p {
    height: 80px;
    --r: 10px;
  }
  p + p {
    height: 50px;
    margin: 25px 35px 0;
    --r: 30px;
  }
</style>
`;
