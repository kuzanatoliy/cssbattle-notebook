module.exports = `
<p h><p a><p><p a><p h>
<style>
  * {
    margin: 0;
    [h] {
      height: 90px;
    }
    [a] {
      --b: #334F9F;
      --c: #97AE41;
    }
    p {
      height: 40px;
      background: var(--b, #97AE41);
      margin: 0 40px;
      color: var(--c, #334F9F);
      box-shadow: 40px 0, -40px 0;
    }
  }
</style>
`;
