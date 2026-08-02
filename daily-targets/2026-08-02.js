module.exports = `
<p><p>
<style>
  * {
    background: #E05947;
    * {
      color: #EED9D9;
      border: dotted 70px;
      margin: 40px 100px;
      p {
        position: fixed;
        border: solid 5vw;
        inset: 90px 60px;
        & + p {
          inset: 25px 155px 25px 25px;
          border-width: 0 0 0 20px;
        }
      }
    }
  }
</style>
`;
