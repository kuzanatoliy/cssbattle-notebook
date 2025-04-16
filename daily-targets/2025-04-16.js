module.exports = `
<p><p>
<style>
  * {
    background: #4FC1AD;
    outline: solid 40px #4C455B;
    margin: 90px 60px;
    * {
      margin: 0 80px;
      p {
        position: fixed;
        padding: 60px;
        top: -70px;
        left: 60px;
        & + p {
          outline: none;
          padding: 20px;
          top: 50px;
          left: 20px;
          -webkit-box-reflect: right 30vw;
        }
      }
    }
  }
</style>
`;
