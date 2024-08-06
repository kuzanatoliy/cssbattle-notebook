module.exports = `
<p a><p><p c><p b>
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
    p + p {
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
    [b] {
      --b: #FFF;
      height: 40px;
      width: 60px;
      bottom: -4px;
      left: 20px;
      color: #FFF;
      box-shadow: 25vw 0, 50vw 0, 75vw 0;
    }
  }
</style>
`;
