module.exports = `
<p r><p>
<style>
  * {
    background: #68D0DF;
    * {
      background: #FFF;
      margin: 70px 120px;
      [r] {
        border-radius: 9in;
      }
      p {
        position: fixed;
        background: #9A5DCB;
        color: #9A5DCB;
        height: 40px;
        width: 40px;
        margin: -20px;
        box-shadow: 160px 160px;
        & + p {
          width: 80px;
          margin-left: 80px;
          box-shadow: -80px 160px;
        }
      }
    }
  }
</style>
`;
