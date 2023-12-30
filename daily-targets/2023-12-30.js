module.exports = `
<p a><p>
<style>
  * {
    background: #A49FBB;
  }
  body {
    margin: 45px 70px 165px;
    -webkit-box-reflect: below 30px;
  }
  p {
    background: #291D61;
    margin: 0;
    height: 60px;
  }
  p + p {
    height: 30px;
  }
  [a] {
    clip-path: polygon(50% 0, 60vh 100%, 20vw 100%);
  }
</style>
`;
