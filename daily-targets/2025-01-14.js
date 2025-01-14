module.exports = `
<p c><p>
<style>
  * {
    background: #DE817E;
    body {
      background: #EBE77E;
      margin: 100px 140px 70px;
      p {
        height: 42px;
      }
      p + p {
        height: 10px;
        margin-top: 58px;
      }
      [c] {
        clip-path: polygon(0 0, 100% 0, 75% 100%, 50% 0, 25% 100%);
      }
    }
  }
</style>
`;
