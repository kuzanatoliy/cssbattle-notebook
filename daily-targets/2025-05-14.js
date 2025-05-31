module.exports = `
<p><p>
<style>
  * {
    background: #243D83;
    border-radius: 9in;
    body {
      background: #5AA4B7;
      margin: 30px 120px;
      clip-path: polygon(0 33%, 50% 0, 100% 33%, 100% 100%, 0 100%);
      p {
        padding: 40px;
        float: left;
        margin: 80px -40px;
        & + p {
          margin-left: 120px;
        }
      }
    }
  }
</style>
`;
