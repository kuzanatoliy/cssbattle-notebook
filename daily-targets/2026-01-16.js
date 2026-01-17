module.exports = `
<p><p><p><p><dl>
<style>
  * {
    background: #0F3A22;
    * {
      margin: 60px 95px;
      p {
        background: #289C5B;
        padding: 30px;
        margin: 0;
        & + p {
          background: #FBFAE2;
          float: left;
          margin: 60px 0 0;
          & + p {
            margin-left: 15px;
            & + dl {
              position: fixed;
              inset: 40px 55px;
              border-radius: 9in;
            }
          }
        }
      }
    }
  }
</style>
`;
