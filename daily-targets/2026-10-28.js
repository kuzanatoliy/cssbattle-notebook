module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #F7F2BC);
    * {
      --b: #30ACCE;
      margin: 100px 140px 80px;
      border-radius: 9in;
      * {
        position: fixed;
        padding: 40px;
        border-radius: 9in 0 0;
        top: -20px;
        left: 0;
        & + * {
          left: 40px;
          scale: -1 1;
          --b: #1D5260;
        }
      }
    }
  }
</style>
`;
