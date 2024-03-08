module.exports = `
<p><a><p a><a><p><a>
<style>
  * {
    background: #E3516E;
  }
  body {
    background: #FADE8B;
    margin: 75px 60px;
  }
  [a] {
    height: 200px;
  }
  a {
    position: relative;
    display: block;
    height: 40px;
    width: 50px;
    left: -15px;
    top: -29px;
    clip-path: polygon(0 100%, 50% 0, 100% 100%);
  }
  [a] > a {
    height: 85px;
    width: 106px;
    left: -43px;
    top: -9px;
    scale: -1;
  }
  p {
    position: fixed;
    width: 20px;
    height: 120px;
    bottom: 0;
    left: 115px;
    & + p {
      left: 190px;
      & + p {
        left: 265px;
      }
    }
  }
</style>
`;
