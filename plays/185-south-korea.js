module.exports = `
<p><p><dl><p><p><p><p m b><p b><p b></dl><dl><p><p b><p><p m b><p><p b>
<style>
  * {
    background: var(--b, #FFF);
  }
  * * {
    border-radius: var(--r, 9in);
    --b: linear-gradient(#CD2E3A 60px, 0, #0047A0);
    margin: var(--m, 90px 140px);
  }
  p {
    --m: 30px 0;
    float: left;
    height: 60px;
    width: 60px;
  }
  p + p {
    --b: #0047A0;
  }
  [m] {
    --m: 0 0 0 176px;
  }
  [b] {
    --b: linear-gradient(#000 27px, 0, #FFF 33px, 0, #000);
  }
  dl {
    --r: 0;
    --m: 0;
    --b: n;
    position: fixed;
    inset: 120px 70px;
    height: 60px;
    width: 260px;
    rotate: 30deg;
    & + dl {
      rotate: -30deg;
    }
    & p {
      --m: 0;
      width: 10px;
      --b: #000;
      float: left;
      & + p {
        --m: 0 0 0 6px;
      }
      & [b] {
        
      }
    }
  }
</style>
`;
