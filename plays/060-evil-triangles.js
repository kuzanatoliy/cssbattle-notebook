module.exports = `
<p><p>
<style>
  * {
    margin: 0;
    background: #191919;
  }
  body {
    margin: 75px 100px;
  }
  p {
    background: #4F77FF;
    height: 50px;
    clip-path: polygon(0 0, 100% 0, 75% 100%, 50% 0, 25% 100%);
  }
  p + p {
    height: 100px;
    clip-path: polygon(0 0, 25% 50%, 50% 0, 75% 50%, 100% 0, 100% 50%, 75% 100%, 50% 50%, 25% 100%, 0 50%);
  }
</style>
`;
