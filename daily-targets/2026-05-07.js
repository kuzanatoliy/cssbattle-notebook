module.exports = `
<p><p>
<style>
  * {
    background: #3157B4;
    margin: 20px 35px;
    p {
      width: 80px;
      height: 80px;
      background: #84BE8D;
      margin: 20px;
      border: solid 10px #060F55;
      border-radius: 0 0 50%;
      -webkit-box-reflect: right 5vw;
      & + p {
        scale: 1 -1;
      }
    }
  }
</style>
`;
