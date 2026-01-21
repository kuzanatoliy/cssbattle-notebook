module.exports = `
<p><p>
<style>
  * {
    background: #B0ACD5;
    margin: 50px;
    body {
      background: #6A5885;
      border-radius: 9in 9in 0 0;
      padding: 10px;
      p {
        border-radius: 9in;
        margin: 0 50px;
        height: 80px;
        & + p {
          position: fixed;
          inset: 35vw;
        }
      }
    }
  }
</style>
`;
