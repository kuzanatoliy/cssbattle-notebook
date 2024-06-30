module.exports = `
<p><p><p><p><p a><p a b><p a>
<style>
  * {
    background: #DBBEDF;
    position: relative;
    body {
      margin: 0 20px;
    }
    p {
      height: 100px;
      background: #81008F;
      margin: 20px 0;
      top: -100px;
    }
    [a] {
      top: -500px;
      margin-inline: var(--m, 90px);
    }
    [b] {
      --m: 130px;
    }
  }
</style>
`;
