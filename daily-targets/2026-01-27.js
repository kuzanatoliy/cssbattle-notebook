module.exports = `
<p><p>
<style>
  * {
    background: #B6EBE7;
    * {
      color: #5E2BB7;
      border: solid 30px;
      border-top: none;
      margin: 180px 10px -30px;
      * {
        padding: 10px 20px;
        position: fixed;
        margin: 0;
        border-radius: 0 0 9in 9in;
        left: 80px;
        -webkit-box-reflect: right var(--r, 40px);
        & + p {
          color: #9382E4;
          scale: 1 -1;
          top: 130px;
          left: 10px;
          --r: 180px;
        }
      }
    }
  }
</style>
`;
