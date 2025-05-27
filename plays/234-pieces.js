module.exports = `
<dl><p>
<style>
  * {
    background: #1FBCB5;
    margin: 0;
    body {
      overflow: hidden;
    }
    * {
      background: linear-gradient(#1FBCB5 50%, 0, var(--b, #074760));
      inset: 70px 30vw;
      position: fixed;
      dl {
        inset: 110px 40vw;
        border-radius: 9in;
        --b: #F9F8F4;
        box-shadow: 0 0 0 5vw #FFB43D, 0 0 0 10vw #F9F8F4, inset 0 0 0 5vw #074760;
        p {
          inset: 50% 30vw 70px 50%;
          background: radial-gradient(at 0 0, #F9F8F4 5vw, 0, #1FBCB5 80px, 0, #F9F8F4);
        }
      }
    }
  }
</style>
`;
