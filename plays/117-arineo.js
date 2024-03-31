module.exports = `
<style>
  * {
    background: var(--b, #fff);
    position: fixed;
    margin: 0;
    body {
      --b: #0088CA;
      inset: 139px 189px;
      border-radius: 9in;
    }
    p {
      --b: #2E2926;
      inset: 60px 92px;
      clip-path: polygon(84px 0, 132px 0, 100% 100%, 172px 100%, 50% 24%, 44px 100%, 0 100%);
    }
    p + p {
      --b: #fff;
      inset: 58px 80px 70px 120px;
      clip-path: polygon(0 40px, 40% 120px, 100% 0, 100% 50px, 40% 100%, 0 91px);
      & + p {
        --b: #0088CA;
        inset: 70px 80px 82px 120px;
        clip-path: polygon(0 40px, 40% 120px, 100% 0, 100% 28px, 40% 100%, 0 68px);
      }
    }
  }
</style>
`;
