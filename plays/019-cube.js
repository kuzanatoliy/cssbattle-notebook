module.exports = `
<p><p><p>
<style>
  * {
    margin: 40px 75px;
    background: var(--b, #0B2429);
    p {
      width: 71px;
      height: 72px;
      float: left;
      margin: 0px -21px;
      transform: skewY(var(--s, -45deg));
      --b: #998235;
      & + p {
        margin: -72px 50px;
        --s: 45deg;
        --b: #1A4341;
        & + p {
          margin: -16px 0;
          width: 100px;
          height: 100px;
          transform: rotate(45deg);
          --b: #F3AC3C;
        }
      }
    }
  }
</style>
`;
