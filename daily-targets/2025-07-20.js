module.exports = `
<p><p>
<style>
  * {
    background: #FADE8B;
    * {
      background: #48BF7D;
      margin: 85px 150px;
      border-radius: 9in;
      * {
        position: fixed;
        inset: 50px -5vw 40px;
        -webkit-box-reflect: var(--r, below);
        & + * {
          background: #FFF;
          --r: right 26px;
          inset: 37px 63px 78px 23px;
        }
      }
    }
  }
</style>
`;
