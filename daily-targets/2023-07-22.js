module.exports = `
<p><p>
<style>
  * {
    background: #E3516E;
  }
  body {
    margin: 50px 23px;
  }
  p {
    margin: 12px;
    background: #FADE8B;
    height: 100px;
    clip-path: polygon(50% 0, 85px 100%, 245px 100%, 50% 0);
  }
  p + p {
    height: 88px;
    clip-path: polygon(0 0, 88px 100%, 242px 100%, 100% 0);
  }
</style>
`;
