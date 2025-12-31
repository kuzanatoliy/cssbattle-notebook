module.exports = `
<p><dl>
<style>
  * {
    background: #0B2429;
    body, p {
      background: #CE6F4A;
      border-radius: 20px;
      margin: 80px 90px 50px;
      p {
        position: relative;
        height: 60px;
        top: -30px;
        margin: 0;
        width: 140px;
        & + dl {
          height: 20px;
          margin: -30px 0 0;
        }
      }
    }
  }
</style>
`;
