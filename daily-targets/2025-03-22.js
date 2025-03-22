module.exports = `
<dl><p>
<style>
  * {
    background: var(--b, #FADE8B);
    margin: 0;
    body {
      --b: #E3516E;
      color: #FADE8B;
      margin: 80px 50px;
      padding: 50px 0;
      clip-path: polygon(0 50%, 88px 100%, 212px 100%, 100% 50%, 212px 0, 88px 0);
      dl {
        --b: #FADE8B;
        height: 40px;
        p {
          height: 40px;
          --b: #E3516E;
          margin: 0 130px;
          border-radius: 9in;
          outline: solid 30px;
        }
      }
    }
  }
</style>
`;
