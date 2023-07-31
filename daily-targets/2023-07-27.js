module.exports = `
<p><p>
<style>
  * {
    background: #4F77FF;
  }
  p {
    position: fixed;
    top: 54px;
    left: 50px;
    width: 300px;
    height: 160px;
    background: #1038BF;
    clip-path: polygon(50% 0, 100% 130px, 0 130px);
  }
  p + p {
    background: #fff;
    clip-path: polygon(50% 0, 230px 100%, 70px 100%);
  }
</style>
`;
