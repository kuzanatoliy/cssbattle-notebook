module.exports = `
<p><p><p><p><dl></dl><dl>
<style>
  * {
    background: #7DDDEB;
    * {
      margin: 60px 110px;
      p {
        margin: 10px;
        background: #9A5DCB;
        float: left;
        padding: 35px;
      }
      dl {
        margin: 0;
        position: fixed;
        padding: 5px 65px;
        color: #7DDDEB;
        box-shadow: 0 40px, 40px 130px;
        & + dl {
          padding: 65px 5px;
          box-shadow: 40px -80px, 40px 80px, 130px -40px, 130px 130px;
        }
      }
    }
  }
</style>
`;
