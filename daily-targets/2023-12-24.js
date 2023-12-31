module.exports = `
<p><p>
<style>
  * {
    background: #645E00;
  }
  * * {
    margin: 0 170px;
    background: #FFF579;
  }
  p {
    height: 100px;
    width: 200px;
    margin: 0 -70px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  p + p {
    scale: -1;
    margin-top: 100px;
  }
</style>
`;
