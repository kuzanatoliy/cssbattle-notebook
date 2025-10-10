module.exports = `
<p><p>
<style>
  * {
    background: #191210;
    * {
      background: #84271C;
      border: solid 20px #ECA03D;
      margin: 80px 130px;
      border-radius: 9in;
      box-shadow: inset 0 0 0 25px #191210;
      p {
        position: fixed;
        border-radius: 9in 9in 0 0;
        border-bottom: 0;
        padding: 15px 30px;
        top: 20px;
        left: 120px;
        & + p {
          top: 70px;
          left: -80px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
