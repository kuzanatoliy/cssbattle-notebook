module.exports = `
<p><p><p>
<style>
  * {
    background: #EBE77E;
    * {
      margin: 30px 110px;
      p {
        height: 50px;
        width: 50px;
        margin: 30px 0;
        box-shadow: -5vh 5vh 0 5vh #DE817E;
        & + p {
          margin-left: 80px;
          & + p {
            margin-left: 160px;
          }
        }
      }
    }
  }
</style>
`;
