module.exports = `
<p><p><p><p>
<style>
  * {
    background: #4C3AB3;
    border-radius: 0 0 9in 9in;
    body {
      scale: -1;
      background: #D96E9F;
      margin: 30px 100px;
      p {
        background: #4C3AB3;
        position: fixed;
        padding: 90px 70px;
        margin: 30px;
        & + p {
          margin: 0 40px;
          padding: 100px 60px;
          background: #D96E9F;
          & + p {
            margin: 0 70px;
            padding: 85px 30px;
            background: #4C3AB3;
            & + p {
              margin: 120px 80px;
              padding: 20px;
              background: #D96E9F;
              border-radius: 9in;
            }
          }
        }
      }
    }
  }
</style>
`;
