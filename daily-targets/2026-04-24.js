module.exports = `
<p><p>
<style>
  * {
    background: #A34F50;
    body {
      background: #FFF;
      margin: 50px 100px;
      border-radius: 9in;
      p {
        background: radial-gradient(at 100% 100%, #111 60px, 0, #F7CB71 25vw, 0, #A34F50);
        margin: 0 100px 0 0;
        height: 100px;
        & + p {
          margin: 0 0 0 100px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
