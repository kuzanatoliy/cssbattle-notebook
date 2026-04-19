module.exports = `
<p><p>
<style>
  * {
    background: #2F5C24;
    color: #EBCB58;
    body {
      background: #EBCB58;
      margin: 25px 230px 205px 100px;
      box-shadow: 130px 45vw;
      p {
        position: fixed;
        padding: 20px 80px;
        border: solid 30px;
        border-radius: 0 9in 9in 0;
        border-left: 0;
        top: 65px;
        left: 130px;
        margin: 0;
        & + p {
          scale: -1;
          top: 135px;
          left: 80px;
        }
      }
    }
  }
</style>
`;
