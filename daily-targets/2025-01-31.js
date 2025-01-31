module.exports = `
<p c><p>
<style>
  * {
    background: #2F5A76;
    body {
      border: solid 40px #C15965;
      border-radius: 9in;
      margin: 40px 60px;
      padding: 24px 60px;
      p {
        position: fixed;
        height: 60px;
        width: 80px;
      }
      p + p {
        top: 200px;
      }
      [c] {
        background: #C15965;
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
      }
    }
  }
</style>
`;
