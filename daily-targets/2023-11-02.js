module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #CBC35C);
  }
  * * {
    --b: #1D1714;
    margin: 75px;
  }
  body {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
  p {
    float: left;
    margin: 0;
    height: 50%;
    width: 50%;
    --b: #FFFAC2;
  }
  p + p {
    --b: #12703D;
  }
  p + p + p {
    --b: #CF464A;
  }
</style>
`;
