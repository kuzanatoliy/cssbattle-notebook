module.exports = `
<p><p><p><p>
<style>
  * {
    background: #FADE8B;
    * {
      background: #414B81;
      margin: 130px 180px;
      p {
        position: fixed;
        padding: 100px 20px;
        top: -80px;
        left: -60px;
        & + p {
          left: 60px;
          & + p {
            rotate: 90deg;
            top: -120px;
            left: 0;
            & + p {
              top: -40px;
            }
          }
        }
      }
    }
  }
</style>
`;
