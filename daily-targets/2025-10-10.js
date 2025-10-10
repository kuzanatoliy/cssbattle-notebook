module.exports = `
<p><dl>
<style>
  * {
    background: #D27644;
    body {
      background: #000;
      margin: 90px 125px 0;
      border-radius: 9in 9in 0 0;
      padding: 15px;
      p {
        background: #FEF6E2;
        padding: 10px;
        border-radius: 9in;
        margin: 45px 50px 70px;
        & + dl {
          height: 30px;
          box-shadow: -30px 30px, 30px 30px; 
        }
      }
    }
  }
</style>
`;
