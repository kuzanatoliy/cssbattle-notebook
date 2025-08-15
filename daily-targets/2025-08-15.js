module.exports = `
<dl><p><p>
<style>
  * {
    background: #FFEFF2;
    body, p {
      background: #4F77FF;
      margin: 70px 20px;
      padding: 30px 100px;
      border-radius: 25vw 25vw 0 0;
      * {
        margin: 0;
        height: 80px;
        padding: 10px;
        p {
          height: 30px;
          float: left;
          border-radius: 9in 0 0;
          padding: 25px;
          & + p {
            scale: -1 1;
            margin-left: 40px;
          }
        }
      }
    }
  }
</style>
`;
