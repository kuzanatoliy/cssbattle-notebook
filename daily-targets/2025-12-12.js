module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #63B476);
    border-radius: 9in;
    body {
      --b: #243D83;
      margin: 100px 110px;
      box-shadow: 65px 0 0 -35px #FFF;
      p {
        margin: 0;
        --b: #000E37;
        width: 100px;
        height: 100px;
        & + p {
          position: fixed;
          inset: 135px 80px;
          height: 30px;
          --b: #FFF;
          width: 95px;
        }
      }
    }
  }
</style>
`;
