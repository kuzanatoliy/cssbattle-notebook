module.exports = `
<p><p><p>
<style>
  * {
    background: #2D3464;
    * {
      margin: 0 120px;
      p {
        background: #5AA4B7;
        padding: 40px;
        border-radius: 0 0 9in 9in;
        margin: 0;
        & + p + p {
          scale: -1;
        }
      }
    }
  }
</style>
`;
