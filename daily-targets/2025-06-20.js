module.exports = `
<p><p>
<style>
  * {
    background: #EEB850;
    * {
      background: #6592CF;
      margin: 20px 60px 60px 20px;
      p {
        margin: 0 0 0 60px;
        background: #FEFEFF;
        height: 100px;
        & + p {
          height: 60px;
          margin-top: 60px;
        }
      }
    }
  }
</style>
`;
