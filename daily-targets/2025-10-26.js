module.exports = `
<p><p><p>
<style>
  * {
    background: #3F4869;
    * {
      margin: 5px 95px;
      p {
        margin: 0 0 40px 0;
        background: radial-gradient(circle at 50% var(--h, 150%),#DE6B67 35vh, 0, #3F4869);
        height: 70px;
        & + p {
          --h: 50%;
          & + p {
            --h: -50%;
          }
        }
      }
    }
  }
</style>
`;
