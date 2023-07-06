module.exports = `
<p>
<style>
  * {
    background: #F5D6B4;
    color: #D86F45;
    border: var(--b);
    border-radius: var(--r);
  }
  body {
    margin: 120px 105px;
    height: 55px;
    border: solid 40px #D86F45;
    border-top: none;
    --r: 0 0 9in 9in;
  }
  p {
    position: relative;
    top: -20px;
    height: 40px;
    width: 40px;
    --r: 9in;
    box-shadow: -40px 0, 110px 0;
  }
</style>
`;
