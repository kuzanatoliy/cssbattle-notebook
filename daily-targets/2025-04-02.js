module.exports = `
<p><p><p>
<style>
  * {
    background: #5A9F48;
    * {
      margin: 70px 100px;
      p {
        margin: 0;
        border: solid var(--b, 40px) #394257;
        & + p {
          margin: 0 55px;
          height: 120px;
          --b: 30px;
          & + p {
            position: fixed;
            height: 100px;
            inset: 70px 65px;
            border-radius: 9in;
          }
        }
      }
    }
  }
</style>
`;
