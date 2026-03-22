module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #F3AC3C);
    * {
      --b: #2D696F;
      margin: 135px;
      * {
        position: fixed;
        --b: #FCF3F0;
        border: solid 30px #2D696F;
        padding: 40px;
        top: 0;
        left: 115px;
        border-radius: 0 9in 9in;
        & + * {
          top: -110px;
          left: -125px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
