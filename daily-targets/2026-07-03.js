module.exports = `
<dl><p><p><p><p>
<style>
  *, dl {
    background: #9BE9FD;
    body {
      margin: 50px 100px;
      border-radius: 9in;
      background: #222;
      dl {
        height: 150px;
        margin: 50px 40px;
        position: relative;
        top: 50px;
        padding: 10px;
        p {
          float: left;
          background: #222;
          padding: 15px;
          margin: 20px 10px;
          & + p + p {
            margin: 10px 15px;
            padding: 10px 35px;
            & + p {
              margin: 10px 0;
              padding: 10px 50px;
            }
          }
        }
      }
    }
  }
</style>
`;
