module.exports = `
<p><p>
<style>
  * {
    background: #FEF6E2;
    * {
      background: #161E44;
      margin: 40px 185px;
      p {
        position: fixed;
        inset: 50px -30vw 30vw;
        & + p {
          inset: 35vw -85px 30px;
        }
      }
    }
  }
</style>
`;
