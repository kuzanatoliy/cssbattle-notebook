module.exports = `
<p><p>
<style>
  * {
    background: #4F55A2;
    outline: solid 10px #4F55A2;
    * {
      background: #DCC6A8;
      margin: 150px 105px 55px;
      border-radius: 30px;
      p {
        position: fixed;
        padding: 40px 15px;
        top: -65px;
        left: -5vh;
        & + p {
          left: 175px;
        }
      }
    }
  }
</style>
`;
