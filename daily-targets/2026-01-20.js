module.exports = `
<p><p>
<style>
  * {
    margin: 0;
    background: #FEF6E2;
    * {
      position: fixed;
      background: repeating-linear-gradient(#AC342E 0px, #AC342E 5vw, 0, #FEF6E2 50px);
      inset: 90px 0;
      p {
        rotate: 90deg;
        & + p {
          background: #AC342E;
          inset: 60px 110px;
          border-radius: 9in;
          border: solid 60px #FEF6E2;
        }
      }
    }
  }
</style>
`;
