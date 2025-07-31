module.exports = `
<p><p>
<style>
  * {
    background: #B6EBE7;
    body {
      border: solid 40px #9382E4;
      border-top: none;
      margin: 70px 120px 30px;
      p {
        background: #9382E4;
        position: fixed;
        width: 40px;
        height: 160px;
        margin: 0 0 0 -135px;
        -webkit-box-reflect: right var(--r, 90vh);
        & + p {
          background: #5E2BB7;
          width: 135px;
          height: 80px;
          margin: 40px 0 0 -135px;
          --r: 80px;
        }
      }
    }
  }
</style>
`;
