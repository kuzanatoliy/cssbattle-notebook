module.exports = `
<p><p><p><p>
<style>
  * {
    background: #4F77FF;
    * {
      background: #F0CD48;
      margin: 60px 50px;
      p {
        border: solid 5vw #4F77FF;
        margin: 0 60px;
        height: 40px;
        & + p {
          margin-top: -5vw;
        }
      }
    }
  }
</style>
`;
