module.exports = `
<p><p><p>
<style>
  * {
    background: #CE4830;
    body {
      border-radius: 9in;
      margin: 55px 120px 85px;
    }
    * {
      background: #EDF4B0;
      p {
        position: relative;
        height: 20px;
        border: solid #CE4830;
        border-width: 10px 15px;
        top: 130px;
        margin: 0 15px;
        & + p {
          margin: 0 35px;
          top: 120px;
          & + p {
            border-width: 10px;
            top: -10px;
            margin: 0 70px;
            height: 40px;
          }
        }
      }
    }
  }
</style>
`;
