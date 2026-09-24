module.exports = `
<p><p>
<style>
  * {
    background: #FADE8B;
    * {
      background: #3A4B86;
      color: #3A4B86;
      position: fixed;
      margin: 0;
      inset: 30px 40vw;
      * {
        rotate: 90deg;
        & + p {
          inset: 30vw 170px;
          box-shadow: 90px 90px, -90px -90px;
        }
      }
    }
  }
</style>
`;
