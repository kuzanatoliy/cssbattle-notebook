module.exports = `
<p><p>
<style>
  * {
    background: #FFF;
    body {
      background: #394257;
      margin: 75px 125px;
      outline: solid 40px #D9BB61;
      outline-offset: 10px;
      p {
        position: fixed;
        padding: 45px;
        margin: -50px;
        border-radius: 0 0 40px;
        -webkit-box-reflect: right 70px;
        & + p {
          top: 235px;
          scale: 1 -1;
        }
      }
    }
  }
</style>
`;
