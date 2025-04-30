module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #2A2753);
    margin: 0;
    p {
      float: left;
      height: 100%;
      width: 50%;
      --b: #C3C441;
      clip-path: polygon(0 0, 100% 0, 100% 35%, 50% 65%, 0 35%);
      & + p {
        --b: #E25C57;
        scale: -1;
      }
    }
  }
</style>
`;
