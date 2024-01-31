module.exports = `
<p t c><p t><p>
<style>
  * {
    background: var(--b, #9F002F);
  }
  * * {
    --b: #F7BED9;
    margin: 145px 100px;
  }
  p {
    margin: 0;
    position: fixed;
    height: 160px;
    width: 100px;
    inset: 70px 75px;
    &[t] {
      clip-path: polygon(0 50%, 100% 0, 100% 100%);
    }
    &[c] {
      --b: #ED3B9A;
    }
    & + p {
      inset: 110px 275px;
      height: 80px;
      width: 50px;
      & + p {
        width: 40px;
        height: 40px;
        border-radius: 9in;
        inset: 130px 115px;
      }
    }
  }
</style>
`;
