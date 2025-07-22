module.exports = `
<p b><p><dl><p>
<style>
  * {
    margin: 0;
    background: #EEE;
    position: fixed;
    [b] {
      border: solid 14px #439E6B;
      border-bottom: none;
    }
    p {
      inset: 50vw 30vw 60px;
      & + p {
        background: #246541;
        inset: 70px 50vh;
        & + dl {
          border-radius: 9in;
          inset: 45px 50vw 205px 50vh;
          background: linear-gradient(#439E6B 34%, 0, #EEE 66%, 0, #439E6B);
          -webkit-box-reflect: right;
          p {
            background: #000;
            inset: 62px 215px 228px 55vh;
            border-radius: 0 0 9in 9in;
          }
        }
      }
    }
  }
</style>
`;
