module.exports = `
<dl><p></dl><dl><p>
<style>
  * * {
    background: #4C4C6B;
    margin: 15px 50px;
    * {
      margin: 0;
      border: solid;
      border-width: 0 50px;
      border-color: 0 #4A9A86 0 #FAE29E;
      height: 120px;
      scale: -1;
      & + * {
        margin-top: 30px;
        scale: 1;
      }
      p {
        border-width: 0 20px;
        height: 50px;
        scale: -1;
      }
    }
  }
</style>
`;
