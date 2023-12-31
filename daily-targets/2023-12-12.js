module.exports = `
<p><p>
<style>
  * {
    background: #004416;
  }
  * * {
    margin: 70px 120px;
  }
  p {
    height: 80px;
    clip-path: polygon(0 0, 100% 0, 100% 35px, 75% 55px, 50% 35px, 25% 55px, 0 35px);
    background: #82CA9C;
    margin: 0;
  }
  p + p {
    scale: -1;
  }
</style>
`;
