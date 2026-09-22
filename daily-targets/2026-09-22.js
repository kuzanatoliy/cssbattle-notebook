module.exports = `
<p><p>
<style>
  * {
    background: #8E7B3B;
    * {
      border: solid var(--w, 5vh) #463C1D;
      margin: 50px 185px;
      p {
        position: fixed;
        --w: 10px;
        left: -50px;
        top: 0;
        padding: 40px 20px;
        border-radius: 9in 0 0 9in;
        & + p {
          left: 20px;
          top: 100px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
