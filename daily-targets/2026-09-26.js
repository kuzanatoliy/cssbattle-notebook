module.exports = `
<p><dl>
<style>
  * {
    background: #747992;
    body {
      background: #EED9D9;
      margin: 100px;
      border-radius: 0 0 50px 50px;
      p {
        background: #394257;
        padding: 25px 0 0;
        margin: 0 20px;
        & + * {
          float: left;
          padding: 10px;
          margin: 10px 20px;
          border-radius: 9in;
          -webkit-box-reflect: right 30vw;
        }
      }
    }
  }
</style>
`;
