module.exports = `
<p><p>
<style>
  * {
    background: #2F434E;
    body {
      background: linear-gradient(#F8B140 35vw, 0, #2F434E 40vw, 0, #CF6939);
      margin: 30px 70px;
      padding: 50px 40px 0;
      p {
        border-radius: 9in 9in 0 0;
        height: 90px;
        & + p {
          height: 50px;
          margin: 20px 40px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
