module.exports = `
<p><p><p>
<style>
  * {
    background: #F3AC3C;
    * {
      background: linear-gradient(90deg, #282828 40px, 0, #F3AC3C var(--d, 50vw), 0, #282828);
      margin: 140px 80px;
      rotate: 45deg;
      p {
        margin: 0;
        position: fixed;
        inset: 0;
        rotate: 90deg;
        & + p {
          rotate: 45deg;
          inset: 0 40px;
          --d: 30vw;
          & + p {
            rotate: 135deg;
          }
        }
      }
    }
  }
</style>
`;
