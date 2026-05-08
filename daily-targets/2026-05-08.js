module.exports = `
<p><p a><p>
<style>
  * {
    background: #DF914B;
    * {
      margin: 65px 80px;
      [a] {
        margin-top: 0;
        padding: 65px 55px;
        border-radius: 0 0 5vw 5vw;
        background: #EEE;
      }
      p {
        border-radius: 9in;
        border: solid 5vw #EEE;
        float: left;
        margin: 20px 0;
        padding: 15px;
        & + p {
          margin-left: -25px;
        }
      }
    }
  }
</style>
`;
