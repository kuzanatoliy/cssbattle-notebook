module.exports = `
<dl><p><p>
<style>
  * {
    background: #4C4C6B;
    * {
      border: solid 5vw #EBF6F0;
      margin: -20px 80px 220px;
      background: #4A9A86;
      dl {
        border-radius: 9in;
      }
      * {
        position: fixed;
        inset: 10px 30px -90px;
        p {
          border: 0;
          inset: 0 5vw 5vw;
          & + p {
            inset: 0 35vh -60vw;
          }
        }
      }
    }
  }
</style>
`;
