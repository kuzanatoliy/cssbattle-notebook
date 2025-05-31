module.exports = `
<p><p>
<style>
  * {
    margin: 0;
    background: var(--b, #2D3464);
    p {
      position: fixed;
      inset: 0;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      --b: #5AA4B7;
      & + p {
        --b: #C0D6E7;
        scale: -1;
      }
    }
  }
</style>
`;
