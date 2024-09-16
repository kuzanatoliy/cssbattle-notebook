module.exports = `
<p>
<style>
  * {
    background: var(--b, #191919);
    body {
      --b: #EA333D;
      margin: 80px 100px;
      border-radius: 40px;
      padding: 40px;
      p {
        --b: #FFF;
        height: 60px;
        margin: 0 26px 0 42px;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }
    }
  }
</style>
`;
