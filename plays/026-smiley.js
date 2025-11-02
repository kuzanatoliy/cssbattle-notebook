module.exports = `
<p><p><p>
<style>
  * {
   	margin: 20px;
    background: #6592CF;
    p {
      margin: 0;
      padding: 20px 40px;
      float: left;
      border-radius: 9in 9in 0 0;
      border: solid 5vw #060F55;
      border-bottom: 0;
      & + p {
        margin-left: 80px;
        & + p {
          margin: 100px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
