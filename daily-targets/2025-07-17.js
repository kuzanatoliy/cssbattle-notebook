module.exports = `
<p><dl>
<style>
  * {
    background: #243D83;
    * {
      background: #6592CF;
      margin: 60px 130px 120px 170px;
      scale: -1;
      p {
        margin: 0 0 0 28px;
        background: #FFF;
        height: 72px;
        box-shadow: -52px 72px #FFF;
        & + dl {
          margin: 0;
          position: fixed;
          inset: -60px -40px 60px 40px;
        }
      }
    }
  }
</style>
`;
