module.exports = `
<p><p>
<style>
  * {
    background: #FAE29E;
    * {
      margin: 80px 98px;
      p {
        height: 140px;
        width: 86px;
        margin: 0;
        background: #EA9A52;
        float: left;
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
      }
      p + p {
        margin-left: 32px;
        scale: -1;
      }
    }
  }
</style>
`;
