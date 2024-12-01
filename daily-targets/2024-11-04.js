module.exports = `
<p><p><p><p>
<style>
  * {
    background: #2F5A76;
    margin: 0;
    body {
      scale: -1;
      p {
        height: 40px;
        margin: 0 40px;
        color: #F5BB60;
        box-shadow: 40px 0, -40px 0, 0 40px;
        & + p {
          margin: 0 80px;
          & + p {
            margin: 0 120px;
            & + p {
              margin: 0 160px;
            }
          }
        }
      }
      p:nth-child(even) {
        height: 80px;
      }
    }
  }
</style>
`;
