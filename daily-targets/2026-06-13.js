module.exports = `
<dl><p><p></dl><dl a><p><p></dl><dl><p><p>
<style>
  * * {
    background: #EFEADE;
    margin: 40px 50px;
    [a] {
      scale: -1;
    }
    dl {
      float: left;
      margin: 0;
      height: 220px;
      p {
        border-radius: 9in;
        padding: 25px;
        background: #594F7C;
        margin: 5px 25px;
        & + p {
          border-radius: 0 0 9in 9in;
          margin: 10px 0;
        }
      }
    }
  }
</style>
`;
