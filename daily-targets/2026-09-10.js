module.exports = `
<p><p><dl>
<style>
  * * {
    margin: 70px 120px;
    background: #FFF;
    p {
      height: 60px;
      margin: 0 30px;
      border-radius: 9in 9in 0 0;
      border: solid 5vw #333;
      border-bottom: 0;
      & + p {
        margin: 0;
        height: 100px;
        background: #333;
        scale: -1;
        & + * {
          position: fixed;
          inset: 50px 50px 80px 0;
        }
      }
    }
  }
</style>
`;
