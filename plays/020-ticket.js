module.exports = `
<p><p><p>
<style>
  * {
    background: #62306D;
    body {
      background: #E38F66;
      margin: 100px;
      box-shadow: inset 35vw 0 #F7EC7D;
      p {
        position: fixed;
        border-radius: 9in;
        padding: 20px;
        top: 64px;
        left: 80px;
        -webkit-box-reflect: below var(--r, 60px);
        & + p {
          left: 280px;
          & + p {
            padding: 10px;
            left: 230px;
            top: 74px;
            --r: 80px;
          }
        }
      }
    }
  }
</style>
`;
