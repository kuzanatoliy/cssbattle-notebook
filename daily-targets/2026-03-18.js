module.exports = `
<p><p>
<style>
  * {
    background: #323138;
    margin: 0;
    * {
      position: fixed;
      background: #FFF;
      inset: 30vw 0;
      p {
        inset: 0 35vw;
        & + p {
          inset: 70px;
          border: solid 70px #328FC1;
        }
      }
    }
  }
</style>
`;
