module.exports = `
<p><p>
<style>
  * {
    background: #498488;
    body {
      background: #D99795;
      margin: 80px;
      p {
        background: #D9D9D9;
        height: 20px;
        & + p {
          background: #498488;
          height: 60px;
          width: 60px;
          border-radius: 0 9in 0 0;
          margin-top: 60px;
          -webkit-box-reflect: right 30vw;
        }
      }
    }
  }
</style>
`;
