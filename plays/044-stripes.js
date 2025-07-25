module.exports = `
<p><p>
<style>
  * {
    background: #1A4341;
    body {
      margin: 60px;
      background: repeating-linear-gradient(#F3AC3C, #F3AC3C 20px, #1A4341 20px, #1A4341 40px);
      p {
        position: fixed;
        top: 0;
        left: -159q;
        margin: 0;
        border-radius: 50%;
        width: 300px;
        height: 300px;
        & + p {
          left: 265q;
        }
      }
    }
  }
</style>
`;
