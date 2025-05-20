module.exports = `
<p><p>
<style>
  * {
    background: #282828;
    body {
      margin: 30px 80px;
      p {
        margin: 0 0 80px 0;
        width: 80px;
        height: 80px;
        color: #F9DDC6;
        box-shadow: inset -5vw -5vw 0 5vw;
        -webkit-box-reflect: right 80px;
        & + p {
          box-shadow: inset -5vw 5vw 0 5vw;
        }
      }
    }
  }
</style>
`;
