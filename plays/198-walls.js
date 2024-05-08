module.exports = `
<p><p a><p c><p a><p>
<style>
  * {
    background: var(--b, #6867D4);
    margin: 0;
    body {
      display: flex;
      margin: 0 -50px;
      align-items: center;
    }
    p {
      --b: #7BAFDE;
      width: 100px;
      height: 100px;
      transform: skewY(var(--d,26.5deg));
    }
    [a] {
      --b: #000039;
      --d: -26.5deg;
    }
    [c] {
      height: 200px;
    }
  }
</style>
`;
