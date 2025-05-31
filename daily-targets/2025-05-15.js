module.exports = `
<p a><p b><p><p b><p a>
<style>
  * {
    background: #F4DA64;
    * {
      margin: 30px 85px;
      p {
        background: #243D83;
        float: left;
        margin: 0px 5px;
        padding: 20px;
        box-shadow: 0 -10px #D95F5B;
      }
      [a] {
        padding: 40px 20px;
        margin: 10px 95px;
      }
      [b] {
        padding: 20px 40px;
      }
    }
  }
</style>
`;
