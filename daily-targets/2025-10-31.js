module.exports = `
<p><p a><p><p a><p b><p b>
<style>
  * * {
    margin: -40px;
    [b] {
      position: fixed;
      padding: 30px;
      border-radius: 9in;
      top: 60px;
      left: 70px;
      & + p {
        position: fixed;
        top: 180px;
        left: 190px;
      }
    }
    * {
      float: left;
      background: #37A76F;
      margin: 0;
      padding: 65px 90px;
      border: solid 40px;
      & + p + p {
        margin-top: -40px;
      }
      & + [a] {
        margin-left: -40px;
      }
    }
  }
</style>
`;
