module.exports = `
<p><p>
<style>
  * {
    background: #423F36;
    body {
      background: #FEFF58;
      margin: 100px 0;
      p {
        position: fixed;
        padding: 50px;
        rotate: 45deg;
        border-radius: 20px;
        top: 154px;
        left: 150px;
        & + p {
          rotate: 0deg;
          background: #D94E4E;
          border-radius: 50%;
          padding: 30px 112px;
          top: 104px;
          left: -100px;
          box-shadow: 375px 0 #3E5AA9;
        }
      }
    }
  }
</style>
`;
