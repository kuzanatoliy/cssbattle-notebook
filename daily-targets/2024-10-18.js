module.exports = `
<p><p>
<style>
  * {
    background: #191210;
    body {
      background: #84271C;
      margin: 30px 80px;
      p {
        height: 80px;
        width: 80px;
        border-radius: 0 0 50%;
        -webkit-box-reflect: right 80px;
      }
      p + p {
        margin-top: 80px;
        scale: 1 -1;
      }
    }
  }
</style>
`;
