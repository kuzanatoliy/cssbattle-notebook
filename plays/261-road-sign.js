module.exports = `
<p><p>
<style>
  * {
    background: #2D3464;
    * {
      background: #48BF7D;
      margin: 30px 180px;
      * {
        position: fixed;
        background: #ECDFEA;
        inset: 5vw -80px;
        height: 60px;
        border-radius: 5vw;
        & + p {
          top: 90px;
          scale: -1;
        }
        clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
      }
    }
  }
</style>
`;
