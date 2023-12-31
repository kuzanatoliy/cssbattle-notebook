module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #F26522);
  }
  body {
    --b: #FCAF17;
    margin: 90px 80px;
    clip-path: polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%);
  }
  p {
    float: left;
    width: 60px;
    height: 100%;
    margin: 0;
    --b: #FFF33E;
  }
  p + p {
    width: 120px;
    height: 40px;
    margin: 40px 0;
  }
</style>
`;
