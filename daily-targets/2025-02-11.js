module.exports = `
<p><p>
<style>
  * {
    background: #FBFDB7;
    * {
      background: #46BA67;
      margin: 120px 60px;
      p {
        position: fixed;
        height: 120px;
        width: 60px;
        margin: -120px 0;
        & + p {
          margin: 60px 220px;
          color: #D95362;
          box-shadow: -55vw 0, 0 -45vw;
        }
      }
    }
  }
</style>
`;
