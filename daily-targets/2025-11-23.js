module.exports = `
<p a><p><p a><p>
<style>
  * {
    background: #51A499;
    * {
      position: fixed;
      background: #EDED87;
      inset: 35vh 60px;
      margin: 0;
      [a] {
        background: #000;
      }
      p {
        inset: 95px 80px;
        & + p {
          inset: 85px 25vw;
          & + p {
            inset: 75px 30vw;
            & + p {
              inset: 60px 35vw;
            }
          }
        }
      }
    }
  }
</style>
`;
