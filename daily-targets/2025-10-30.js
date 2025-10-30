module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #00B1D4);
    * {
      --b: #FADE8B;
      margin: 26px 326px 226px 26px;
      p {
        --b: none;
        position: fixed;
        border-radius: 9in;
        inset: -17q -334q -17q -17q;
        border: solid 17q;
        & + p {
          inset: -17q -17q -229q;
        }
      }
    }
  }
</style>
`;
