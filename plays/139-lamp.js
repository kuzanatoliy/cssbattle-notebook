module.exports = `
<p>
<style>
  * {
    background: var(--b, #E38F66);
    margin: 0;
    body {
      --b: #62306D;
      margin: 50% 65vh 0;
    }
    p {
      position: fixed;
      --b: #FFFBDA;
      inset: 90px 136px;
      clip-path: polygon(33px 0, 95px 0, 100% 100%, 0 100%);
    }
  }
</style>
`;
