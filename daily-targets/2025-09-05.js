module.exports = `
<p><p a><p>
<style>
  * {
    background: #CA8E75;
    * {
      margin: 0;
      p {
        position: fixed;
        background: #FEFF58;
        inset: 50px 90px;
        rotate: 15deg;
      }
      [a] {
        background: #414B81;
        rotate: -15deg;
        inset: 90px 30px;
        & + p {
          inset: 30vw 40vw;
        }
      }
    }
  }
</style>
`;
