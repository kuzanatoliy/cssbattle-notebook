module.exports = `
<p><p><p>
<style>
  * * {
    background: #993576;
    margin: 25px 125px;
    p {
      background: #000;
      margin: 0 25px;
      height: 50px;
      & + p {
        margin: 0;
        height: 20px;
        & + p {
          margin: 0 35px;
          height: 160px;
          border-radius: 0 0 9in 9in;
          background: #5ADAB8;
          border: solid 20px;
          border-top: 0;
        }
      }
    }
  }
</style>
`;
