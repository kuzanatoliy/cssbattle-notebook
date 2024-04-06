module.exports = `
<dl><dl>
<style>
  * {
    background: var(--b, #926927);
    * {
      --b: #6D480A;
      margin: 120px 200px 80px 100px;
      border-radius: 0 9in;
      transform-origin: 100% 100%;
    }
    dl {
      margin: 0;
      rotate: 90deg;
      height: 100%;
      & dl {
        --b: #FFF;
        rotate: -45deg;
      }
    }
  }
</style>
`;
