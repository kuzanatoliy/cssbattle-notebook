module.exports = `
<p><p>
<style>
  * {
    background: #E8AD6D;
  }
  html {
    border: solid 30px #3B240C;
    border-top: none;
    margin: 130px 120px 85px;
    border-radius: 0 0 9in 9in;
    * {
      margin: 0 -30px 40px;
      p {
        background: #3B240C;
        position: fixed;
        inset: 65px 50vw 95px;
        border-radius: 9in;
        & + p {
          inset: 50vw 215px 25px;
          width: 30px;
        }
      }
    }
  }
</style>
`;
