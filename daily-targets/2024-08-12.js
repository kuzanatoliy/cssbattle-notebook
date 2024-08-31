module.exports = `
<p a><p>
<style>
  * {
    background: #4A9A86;
    body {
      background: #FAE29E;
      margin: 75px 150px 65px 130px;
      p {
        height: 40px;
        width: 40px;
        margin: 40px 0;
        & + p {
          height: 80px;
        }
        &[a] {
          border-radius: 0 0 9in 0;
        }
      }
    }
  }
</style>
`;
