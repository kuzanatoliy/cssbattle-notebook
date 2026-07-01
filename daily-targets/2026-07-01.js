module.exports = `
<p><p a><p><p a>
<style>
  * * {
    background: #FFF;
    margin: 90px 70px;
    [a] {
      padding: 30px 60px;
      top: 150px;
    }
    p {
      position: fixed;
      background: #D9BB61;
      padding: 60px 30px;
      margin: 0;
      border-radius: 9in 0;
      left: 130px;
      & + p {
        left: 70px;
        & + p {
          left: 210px;
          scale: 1 -1;
          background: #394257;
        }
      }
    }
  }
</style>
`;
