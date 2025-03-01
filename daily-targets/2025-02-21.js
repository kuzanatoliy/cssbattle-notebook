module.exports = `
<p><p>
<style>
  * {
    background: #183539;
    body {
      background: #EBE77E;
      margin: 15px 150px;
      border-radius: 9in 9in 0 0;
      padding: 90px 0 0;
      p {
        height: 15px;
        margin: 0;
        width: 50px;
        & + p {
          height: 50px;
          width: 25px;
          margin-top: 75px;
          border-radius: 0 9in 9in 0;
        }
      }
    }
  }
</style>
`;
