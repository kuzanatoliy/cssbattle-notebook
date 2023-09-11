module.exports = `
<p b><p><p a><p a b>
<style>
  * {
    margin: 0;
    background: #B5D1FB;
  }
  body {
    margin: 75px -85px;
  }
  p {
    float: left;
    height: 45px;
    width: 240px;
    border-radius: 0 9in;
    border: solid 30px #8819F6;
    border-bottom: 0;
  }
  p:nth-child(2n) {
    margin-left: -30px;
    border-radius: 9in 0;
  }
  [a] {
    scale: 1 -1;
  }
  [b] {
    position: relative;
    border-color: #230259;
    z-index: 1;
  }
</style>
`;
