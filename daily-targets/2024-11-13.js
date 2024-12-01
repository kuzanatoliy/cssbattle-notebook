module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #F3EAD2);
    * {
      --b: #857495;
      margin: 65px 20px;
      scale: -1;
      p {
        margin: 0;
        --b: #D97D71;
        height: 30px;
      }
      p + p {
        margin: 0 30px;
        height: 100px;
      }
    }
  }
</style>
`;
