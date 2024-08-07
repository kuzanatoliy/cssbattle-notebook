module.exports = `
<p a><p><p c><dl><p>
<style>
  * {
    background: var(--b, #49C85B);
    body {
      --b: #30230A;
      color: #30230A;
      margin: 97px 240px 163px 80px;
      border-radius: 9in 9in 0 0;
      box-shadow: 40vw 0;
      padding: 22px 22px 0;
    }
    p {
      --b: #49C85B;
      margin: 0;
      height: 18px;
    }
    p + p, dl {
      position: fixed;
      height: 40px;
      width: 80px;
      bottom: 212px;
      left: 80px;
      --b: #30230A;
    }
    [c] {
      left: 244px;
      bottom: 232px;
      rotate: 13deg;
    }
    [a] {
      border-radius: 9in 9in 0 0;
      box-shadow: 40vw 0 #49C85B;
    }
    dl {
      position: fixed;
      height: 71px;
      width: 378px;
      bottom: 0;
      left: 11px;
      border-radius: 5vw 5vw 50px 50px;
      p {
        position: absolute;
        --b: #FFF;
        height: 26px;
        width: 44px;
        bottom: 0px;
        left: 59px;
        color: #FFF;
        box-shadow: 72px 0, 144px 0, 216px 0;
      }
    }
  }
</style>
`;
