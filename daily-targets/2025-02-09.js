module.exports = `
<p><p>
<style>
  * {
    background: #6592CF;
    * {
      background: #243D83;
      margin: 75px 40px;
      p {
        margin: 0 24px;
        height: 150px;
        rotate: 90deg;
        & + p {
          position: fixed;
          height: 50px;
          width: 50px;
          border-radius: 9in;
          inset: 30px 55px;
          border: solid 95px #6592CF;
        }
      }
    }
  }
</style>
`;
