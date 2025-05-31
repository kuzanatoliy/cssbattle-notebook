module.exports = `
<dl><p><p><p></dl><dl><p><p><p>
<style>
  * {
    background: #594C94;
    * {
      background: #BFE33A;
      margin: 100px 180px;
      border-radius: 0 10px;
      dl {
        background: none;
        position: fixed;
        inset: 25vw -40vw -80px 5vw;
        & + dl {
          inset: -20vw 5vw 25vw -40vw;
          scale: -1;
        }
        p {
          height: 40px;
          margin: 0;
          & + p {
            margin: -20px 0 0 40px;
            & + p {
              margin-left: 100px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
</style>
`;
