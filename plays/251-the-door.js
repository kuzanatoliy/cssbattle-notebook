module.exports = `
<p><p><p><dl><p>
<style>
  * {
    background: #5DBCF9;
    body {
      margin: 30px 110px;
      scale: -1;
      * {
        background: #21658A;
        margin: 0;
        height: 60px;
        & + p {
          margin: 0 20px;
          height: 40px;
          & + p {
            margin: 0 40px;
            height: 20px;
            & + dl {
              margin: 20px 40px;
              height: 100px;
              border-radius: 0 0 9in 9in;
              p {
                background: #5DBCF9;
                height: 100px;
                margin: 0 40px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
