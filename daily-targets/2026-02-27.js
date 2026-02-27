module.exports = `
<p a><p><p><p><p b><p><p><p>
<style>
  * {
    background: #DB5EAD;
    * {
      background: #12219A;
      margin: 20px 70px;
      scale: -1;
      [a] {
        background: #12219A;
        padding: 65px;
        margin: 0 10px 10px 0;
        border: solid #DB5EAD;
        border-width: 50px 0 0 50px;
        & + p {
          margin-top: 20px;
        }
      }
      p {
        float: left;
        background: #DB5EAD;
        padding: 20px;
        margin: 10px;
      }
      [b] {
        margin-left: 20px;
      }
    }
  }
</style>
`;
