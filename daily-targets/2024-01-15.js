module.exports = `
<p><p><p>
<style>
  * {
    margin: 0;
    background: #FFF;
  }
  body {
    border: solid 40px;
  }
  p {
    position: fixed;
    inset: 130px 0;
    & + p {
      rotate: 90deg;
      & + p {
        background: #000;
        inset: 130px 180px;
      }
    }
  }
</style>
`;
