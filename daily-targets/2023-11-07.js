module.exports = `
<p><p a><p a><p>
<style>
  * {
    background: var(--b, #9B3E41);
  }
  body {
    margin: 65px 30px;
  }
  p {
    float: left;
    width: 85px;
    height: 100%;
    margin: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 50%);
    --b: #FFDC57;
  }
  [a] {
    --b: #FFFEF2;
  }
  p + p + p {
    scale: -1;
  }
</style>
`;
