module.exports = `
<p><dl>
<style>
  * {
    background: #5AA4B7;
    * {
      background: #EBF6F0;
      margin: 45px 160px 45px 60px;
      padding: 30px 30px 0;
      color: #5AA4B7;
      p {
        margin: 0;
        height: 150px;
        border-radius: 30px 0 0;
        box-shadow: inset 90px 0, -60px 30px;
        & + dl {
          background: #5AA4B7;
          position: fixed;
          border-radius: 9in;
          inset: 0 -100px 110px 45vw;
          box-shadow: inset 0 0 0 30px #EBF6F0;
          -webkit-box-reflect: below 10px;
        }
      }
    }
  }
</style>
`;
