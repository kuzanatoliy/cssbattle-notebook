module.exports = `
<style>
  * {
    background: #7A60A1;
    margin: 20px 30px;
    * p {
      border-radius: 9in;
      height: 70px;
      background: #F5DB78;
      margin: 0 95px 10px;
      & + p {
        height: 140px;
        margin: 0;
        border-radius: 9in 9in 0 0;
        & + * {
          position: fixed;
          padding: 25px 10px;
          top: 190px;
          left: 70px;
          -webkit-box-reflect: right 40vw;
        }
      }
    }
  }
</style>
`;
