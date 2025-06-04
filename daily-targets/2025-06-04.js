module.exports = `
<p><p><dl><p>
<style>
  * {
    background: #5A9F48;
    body, dl {
      margin: 0 70px 40px;
      border: solid 30px #282828;
      border-radius: 9in;
      p {
        float: left;
        padding: 140px 40px;
        margin: -30px;
        & + p {
          margin-left: 130px;
        }
      }
      dl {
        position: fixed;
        margin: -160px -30px;
        padding: 100px;
        p {
          position: fixed;
          padding: 100px 50px;
          margin: -50px;
        }
      }
    }
  }
</style>
`;
