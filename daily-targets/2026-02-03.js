module.exports = `
<p><p a><p>
<style>
  * {
    background: #556D7F;
    color: #D99795;
    * {
      border: solid 30px;
      margin: 35px 100px;
      padding: 10px;
      p {
        margin: 10px 0;
        border-width: 15px;
        padding: 0;
        & + [a] {
          margin: 20px 10px;
        }
      }
    }
  }
</style>
`;
