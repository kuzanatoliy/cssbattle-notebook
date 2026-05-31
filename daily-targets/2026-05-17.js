module.exports = `
<p><p>
<style>
  * {
    background: #594C94;
    body {
      background: #EEEDED;
      margin: 20px;
      p {
        position: fixed;
        padding: 45px 90px;
        border-radius: 0 0 9in 9in;
        top: 24px;
        left: 110px;
        -webkit-box-reflect: below var(--r, 40px);
        & + p {
          rotate: 90deg;
          left: 225px;
          top: 89px;
          --r: 35vw;
        }
      }
    }
  }
</style>
`;
