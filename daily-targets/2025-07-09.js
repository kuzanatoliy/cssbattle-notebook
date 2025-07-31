module.exports = `
<dl><p>
<style>
  * {
    background: var(--b, #2E312B);
    * {
      --b: #D9D9D9;
      margin: 110px 0;
      * {
        height: 80px;
        rotate: 90deg;
        p {
          margin: 0 160px;
          height: 40px;
          --b: #2E312B;
          border: solid 20px #7AA70A;
        }
      }
    }
  }
</style>
`;
