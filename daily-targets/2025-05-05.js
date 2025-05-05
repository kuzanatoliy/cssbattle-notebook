module.exports = `
<p><p><dl>
<style>
  * {
    background: #E3DCD1;
    * {
      margin: 80px 130px;
      p {
        border: solid 5vw #D95F5B;
        border-right: none;
        margin: 0 35px 0 0;
        height: 40px;
        border-radius: 9in 0 0 9in;
        & + p {
          margin-top: -20px;
          scale: -1;
          margin: -20px 0 0 35px;
          & + dl {
            position: fixed;
            background: #D95F5B;
            inset: 0 -60px 30vw 40px;
            box-shadow: -25vw 30vw #D95F5B;
          }
        }
      }
    }
  }
</style>
`;
