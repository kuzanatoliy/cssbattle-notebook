module.exports = `
<dl><p><p>
<style>
  * {
    margin: 0;
    background: #3F4869;
    body {
      background: #E25C57;
      margin: 80px 130px;
      border-radius: 9in 0 9in 9in;
      padding: 30px;
      dl {
        height: 80px;
        border-radius: 9in;
        p {
          position: fixed;
          padding: 50px 5px;
          top: 20px;
          left: 200px;
          & + p {
            rotate: 90deg;
            top: 115px;
            left: 220px;
          }
        }
      }
    }
  }
</style>
`;
