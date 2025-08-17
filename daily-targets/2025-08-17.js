module.exports = `
<p><p><dl>
<style>
  * {
    background: #41434B;
    body {
      margin: 70px 60px;
      * {
        position: fixed;
      }
      p {
        margin: 0;
        background: #FFF;
        position: fixed;
        padding: 50px;
        border-radius: 9in 9in 0;
        -webkit-box-reflect: right var(--r, 80px);
        & + p {
          background: #41434B;
          padding: 15px;
          border-radius: 9in;
          top: 105px;
          left: 75px;
          --r: 50vh;
          & + dl {
            padding: 30px 40px;
            background: #D95F5B;
            margin: 100px;
            clip-path: polygon(0 0, 100% 0, 50% 100%);
          }
        }
      }
    }
  }
</style>
`;
