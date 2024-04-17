module.exports = `
<p><p><p><dl>
<style>
  * {
    background: var(--b, #5F133F);
    margin: 0;
    position: fixed;
    color: #F7BED9;
    p {
      --b: #F075B0;
      inset: 42q 185q;
      box-shadow: inset 0 30px, inset 0 -30px;
      clip-path: polygon(50% 0, 100% 30px, 100% 190px, 50% 100%, 0 190px, 0 30px);
    }
    p + p {
      rotate: 60deg;
    }
    p + p + p {
      rotate: 120deg;
    }
    dl {
      inset: 125px 175px;
      --b: #F7BED9;
      border-radius: 9in;
    }
  }
</style>
`;
