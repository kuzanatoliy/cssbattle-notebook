module.exports = `
<p><p>
<style>
  * {
    background: #D95362;
    * {
      margin: 35px 85px;
      p {
        background: #D9D9D9;
        border-radius: 9in 0 0;
        margin: 0 0 0 100px;
        height: 130px;
        & + p {
          margin: -30px 100px 0 0;
          height: 130px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
