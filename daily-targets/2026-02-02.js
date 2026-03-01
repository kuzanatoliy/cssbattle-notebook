module.exports = `
<dl><p><p><p>
<style>
  * {
    background: #2B2A4A;
    * {
      background: #BA463E;
      margin: 90px 160px 10px;
      border-radius: 9in 9in 0 0;
      * {
        border-radius: 9in;
        margin: 0;
      }
      dl {
        position: fixed;
        inset: 110px 100px;
        padding: 20px;
        p {
          padding: 20px;
          float: left;
          background: #2B2A4A;
          & + p {
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>
`;
