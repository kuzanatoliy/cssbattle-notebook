module.exports = `
<dl><p></dl><dl><p>
<style>
  * {
    background: #6592CF;
    * {
      background: #243D83;
      margin: 50px;
      * {
        outline: solid 5vw #6592CF;
      }
    }
    dl {
      margin: 0;
      height: 20px;
      p {
        height: 20px;
        margin: 0 160px 0 80px;
      }
      & + dl {
        margin-top: 40vw;
        scale: -1;
      }
    }
  }
</style>
`;
