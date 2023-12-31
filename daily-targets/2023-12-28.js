module.exports = `
<p><p>
<style>
  * {
    background: #32295A;
    margin: 0;
  }
  body {
    background: #B0ACD5;
    margin: 70px 110px;
  }
  p {
    height: 50%;
    clip-path: polygon(50px 0, 100px 0, 100px 100%, 0 100%);
  }
  p + p {
    scale: -1;
  }
</style>
`;
