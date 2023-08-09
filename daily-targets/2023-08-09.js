module.exports = `
<p><p>
<style>
  * {
    margin: 0;
    background: var(--b, #F5D6B4);
  }
  p {
    position: fixed;
    --b: #FFA885;
    height: 160px;
    width: 400px;
    top: 195px;
    transform: skew(0, -15deg);
  }
  p + p {
    --b: #D86F45;
    transform: skew(0, 15deg);
  }
</style>
`;
