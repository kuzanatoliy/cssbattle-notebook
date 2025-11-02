module.exports = `
<p><p>
<style>
  * {
    background: #1A4341;
    margin: 0;
    p {
      background: #F3AC3C;
      height: 150px;
      width: 200px;
      border-radius: 0 0 25vw;
      -webkit-box-reflect: right;
      & + p {
        scale: 1 -1;
      }
    }
  }
</style>
`;
