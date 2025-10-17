module.exports = `
<p><dl>
<style>
  * {
    background: #243D83;
    body {
      background: linear-gradient(#243D83 25px, 0, #E8AD6D 45px, 0, #243D83 65px, 0, #E8AD6D);
      margin: 95px 65px 120px;
      border-radius: 0 55px 0 0;
      p {
        background: #E8AD6D;
        float: left;
        padding: 30px 53px;
        border-radius: 9in 9in 0 0;
        margin: 0 45px;
        -webkit-box-reflect: right 13px;
        & + dl {
          background: #243D83;
          position: fixed;
          inset: 124px 0;
        }
      }
    }
  }
</style>
`;
