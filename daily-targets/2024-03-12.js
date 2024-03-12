module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #085328);
    border-radius: 9in;
  }
  body {
    --b: #0A9949;
    margin: 70px 130px 200px;
    -webkit-box-reflect: below 25vw;
  }
  p {
    position: relative;
    --b: #49C85B;
    height: 30px;
    width: 180px;
    inset: -5vw;
  }
  p + p {
    position: fixed;
    width: 40px;
    inset: 50px 180px;
    height: 120px;
  }
</style>
`;
