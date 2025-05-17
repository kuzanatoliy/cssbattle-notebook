module.exports = `
<p><p>
<style>
  * {
    background: #51A499;
    body {
      margin: 50px 100px;
      background: #282828;
      p {
        margin: 40px 0;
        width: 80px;
        height: 80px;
        color: #EAC049;
        box-shadow: inset -5vw -5vw 0 5vw;
        -webkit-box-reflect: right 40px;
        & + p {
          box-shadow: inset -5vw 5vw 0 5vw;
        }
      }
    }
  }
</style>
`;
