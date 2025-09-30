module.exports = `
<p><p>
<style>
  * {
    background: #FAE29E;
    * {
      margin: 100px 120px;
      p {
        background: #4A9A86;
        color: #4A9A86;
        float: left;
        padding: 50px 15px;
        margin: 0;
        box-shadow: -30px 30px, -60px 60px;
        & + p {
          margin-left: 100px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
