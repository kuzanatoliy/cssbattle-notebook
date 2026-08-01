module.exports = `
<p><p>
<style>
  * {
    background: #469DBA;
    * {
      background: #FAE29E;
      border: solid 5vw #394257;
      inset: 110px -5vw;
      position: fixed;
      margin: 0;
      p {
        inset: 30px 35vh;
        & + p {
          inset: 90px 35vh;
          background: #469DBA;
        }
      }
    }
  }
</style>
`;
