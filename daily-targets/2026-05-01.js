module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #3A6430);
    * {
      --b: #7DD8C1;
      margin: 0 0 50px;
      * {
        --b: #FBFAE2;
        position: fixed;
        inset: 150px 170px 0;
        & + * {
          --b: #A34F50;
          inset: 50px 90px 90px;
          border-radius: 9in 9in 0 0;
        }
      }
    }
  }
</style>
`;
