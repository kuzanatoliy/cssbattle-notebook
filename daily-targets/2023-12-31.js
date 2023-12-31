module.exports = `
<p><p>
<style>
  body {
    background: #7BAFDE;
    margin: 100px;
  }
  p {
    float: left;
    width: 50%;
    height: 100%;
    background: #6867D4;
    margin: 0;
    transform: skew(0, var(--s, 27deg));
  }
  p + p {
    --s: -27deg;
    background: #000039;
  }
</style>
`;
