module.exports = `
<p><p>
<style>
  * {
    color: #D95362;
    background: #2D3464;
    * {
      margin: 0 80px 220px;
      box-shadow: -80px 0, 80px 0;
      height: 80px;
      p {
        position: relative;
        margin: 0 40px;
        top: 80px;
        & + p {
          height: 40px;
          margin: 0 60px;
          box-shadow: -40px 0, 40px 0, 0 5vw;
        }
      }
    }
  }
</style>
`;
