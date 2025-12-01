module.exports = `
<p><p>
<style>
  * {
    background: #0B2429;
    * {
      background: #A7C2FA;
      margin: 20px 20px 240px;
      p {
        position: fixed;
        inset: 5vw 330px 5vw 30px;
        margin: 0;
        -webkit-box-reflect: right var(--r, 65vw);
        & + p {
          inset: 55vw 70vw 40px 5vw;
          --r: 40vw;
        }
      }
    }
  }
</style>
`;
