module.exports = `
<p><p><p>
<style>
  * {
    background: #0D2A58;
    body {
      background: #F5E3B5;
      margin: 80px 30px;
      * {
        position: fixed;
        padding: 50px 15px;
        top: 84px;
        left: 50px;
        & + p {
          left: 320px;
          & + p {
            padding: 29px 135px 0;
            top: 120px;
            left: 50px;
          }
        }
      }
    }
  }
</style>
`;
