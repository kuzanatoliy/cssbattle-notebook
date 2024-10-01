module.exports = `
<p><p>
<style>
  * {
    background: #FADE8B;
    * {
      margin: 90px 80px;
      p {
        background: radial-gradient(circle at 100% 100%,#FADE8B 60px,0,#222222 120px, 0, #FADE8B);
        width: 120px;
        height: 120px;
        margin: 0;
        float: left;
      }
      p + p {
        scale: -1;
      }
    }
  }
</style>
`;
