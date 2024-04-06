module.exports = `
<p><p a><p b><p a b>
<style>
  * {
    background: var(--b, #62306D);
    margin: 0;
    p {
      position: fixed;
      width: 44q;
      height: 140px;
      --b: #C5B732;
      bottom: 80px;
      right: 158q;
      transform: skewX(var(--s, 20deg));
    }
    [a] {
      --b: #FEF9CA;
      --s: -20deg;
      right: 222q;
    }
    [b] {
      height: 50px;
      width: 55q;
      right: 159q;
      --b: #AA445F;
      --s: 40deg;
      & + [b] {
        --b: #E38F66;
        --s: -40deg;
        right: 210q;
      }
    }
  }
</style>
`;
