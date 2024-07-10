module.exports = `
<p><p><p><p><p><p>
<style>
  * {
    background: #EDAF38;
    * {
      background: #FFFFCD;
      margin: 100px 0;
      p {
        position: relative;
        width: 50px;
        height: 80px;
        top: 20px;
        float: left;
        -webkit-box-reflect: above 35vw;
      }
      p + p {
        margin-left: 20px;
      }
    }
  }
</style>
`;
