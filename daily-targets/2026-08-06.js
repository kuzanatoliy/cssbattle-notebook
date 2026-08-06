module.exports = `
<p><p>
<style>
  * {
    background: #0E127D;
    body {
      background: #EDDF5A;
      margin: 80px 60px;
      p {
        padding: 12px 70px;
        float: left;
        margin: 10px 0;
        -webkit-box-reflect: var(--r, below) 72px;
        & + p {
          padding: 70px 12px;
          margin: 0 10px;
          --r: right;
        }
      }
    }
  }
</style>
`;
