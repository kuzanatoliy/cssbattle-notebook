module.exports = `
<p><p>
<style>
  * {
    background: #84B9C7;
    * {
      border-radius: 9in;
      background: #ECEBEB;
      margin: 50px 100px;
      p {
        float: left;
        padding: 50px;
        margin: 50px -50px;
        box-shadow: 100px 100px #84B9C7;
        & + p {
          margin-left: 150px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
