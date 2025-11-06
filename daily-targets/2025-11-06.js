module.exports = `
<dl s><p><p></dl><dl><p><p></dl><dl s><p><p>
<style>
  * * {
    background: #556D7F;
    margin: 35px;
    [s] {
      scale: -1;
    }
    dl {
      float: left;
      margin: 0 5px;
      p {
        margin: 0;
        background: #EBCB58;
        padding: 75px 50px;
        & + p {
          padding: 50px;
          border-radius: 9in;
          margin-top: -20px;
        }
      }
    }
  }
</style>
`;
