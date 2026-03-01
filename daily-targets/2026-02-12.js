module.exports = `
<p><dl>
<style>
  * {
    background: #B6EBE7;
    * {
      background: #7060C0;
      margin: 100px 30px 10px;
      p {
        height: 10px;
        color: #B6EBE7;
        box-shadow: 0 30px, 0 25vw;
        & + dl {
          position: fixed;
          padding: 15px 30px;
          top: -30px;
          left: 140px;
          border-radius: 9in 9in 0 0;
        }
      }
    }
  }
</style>
`;
