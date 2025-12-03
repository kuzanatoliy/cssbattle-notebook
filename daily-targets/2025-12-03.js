module.exports = `
<p><p a><p>
<style>
  * {
    background: #C8AD17;
    * {
      margin: 55px 90px;
      [a] {
        margin: -40px 0 0;
        height: 70px;
        border-radius: 30px 30px 0 0;
      }
      p {
        margin: 0 50px;
        background: #EEE;
        height: 40px;
        border: solid 5vw #222;
        & + p {
          margin-top: -40px;
        }
      }
    }
  }
</style>
`;
