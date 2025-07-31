module.exports = `
<p><dl><p>
<style>
  * {
    background: #423F36;
    color: #423F36;
    box-shadow: 0 0 0 10px;
    body {
      margin: 30px 140px;
      p {
        margin: 0 35px;
        background: #BBB;
        padding: 25px;
        border-radius: 9in;
        & + * {
          padding: 130px 10px 10px;
          margin: -20px 0;
          border-radius: 30px;
          border: solid 10px #BBB;
          p {
            margin: 0;
            background: #EC2F28;
            padding: 10px;
            border-radius: 0 0 10px 10px;
          }
        }
      }
    }
  }
</style>
`;
