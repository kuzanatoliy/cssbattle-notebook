module.exports = `
<p r><p r><p><p>
<style>
  * {
    background: #588A95;
    * {
      margin: 30px 55px;
      float: left;
      [r] {
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }
      p {
        float: left;
        background: #E8AD6D;
        padding: 100px 50px;
        margin: 20px 0;
        & + p {
          margin-left: -20px;
          & + p {
            margin: 0;
            padding: 55px;
            background: #2F5A76;
            & + p {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
</style>
`;
