module.exports = `
<p><p a><p>
<style>
  * {
    background: #F1E1BE;
    * {
      background: linear-gradient(90deg, #240D29 105px, 0, #F1E1BE 295px, 0, #240D29);
      margin: 140px 0;
      p {
        background: linear-gradient(#240D29 50px, 0, #F1E1BE var(--c, 130px), 0, #240D29);
        position: fixed;
        margin: 0;
        inset: 55px 255px 55px 115px;
        & + p {
          inset: 55px 115px 55px 255px;
          & + p {
            inset: 25px 185px;
            --c: 190px;
          }
        }
      }
    }
  }
</style>
`;
