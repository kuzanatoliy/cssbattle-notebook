module.exports = `
<p><dl>
<style>
  * {
    background: #B95A56;
    * {
      background: #FFF;
      margin: 20px 140px;
      color: #B95A56;
        p {
        height: 20px;
        margin: 0;
        box-shadow: 5vw 5vw, -5vw 60px, 5vw 45vw, -5vw 55vw;
        & + * {
          position: fixed;
          border: solid 5vw;
          padding: 10px;
          border-radius: 9in;
          inset: 25vw -30px;
        }
      }
    }
  }
</style>
`;
