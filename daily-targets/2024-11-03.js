module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #2D3464);
    body {
      --b: #C0D6E7;
      margin: 90px 140px;
    }
    p {
      border-radius: 9in;
      height: 80px;
      margin: 0 -20px;
      position: relative;
      top: 20px;
    }
    p + p {
      margin: 20px 0;
      height: 60px;
      border-radius: 0;
      --b: repeating-linear-gradient(90deg, #D95362 0, #D95362 16px, 0, #2D3464 26px);
    }
  }
</style>
`;
