module.exports = `
<p><p><dl>
<style>
  * {
    background: var(--b, #D8B788);
  }
  body {
    margin: 50px 100px;
    border: solid 20px #684C3B;
    border-radius: 40px;
  }
  p {
    position: fixed;
    width: 100%;
    height: 50px;
    inset: 109px 0;
    & + p {
      rotate: 90deg;
    }
  }
  dl {
    position: fixed;
    height: 120px;
    width: 120px;
    --b: #684C3B;
    border-radius: 9in;
    inset: 74px 140px;
  }
</style>
`;
