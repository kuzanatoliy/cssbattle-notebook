module.exports = `
<p><p><p>
<style>
  * * {
    background: #4A9A86;
    margin: 50px 40px;
    p {
      float: right;
      background: #FAE29E;
      padding: 40px;
      margin: 10px 70px 10px 10px;
      box-shadow: -25vw 25vw #FAE29E;
      & + p {
        margin-left: 50px;
        margin: 10px;
        padding: 15px 70px;
        background: #EBF6F0;
        box-shadow: 40vw 50vh #EBF6F0;
        & + p {
          padding: 15px 50px;
          box-shadow: 30vw 50px #EBF6F0;
        }
      }
    }
  }
</style>
`;
