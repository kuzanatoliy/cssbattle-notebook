module.exports = `
<p a><p b><p c>
<style>
  * {
    margin: 48px 75px;
    background: #0B2429;
  }
  p {
    margin: 0;
  }
  [a], [b] {
    width: 71px;
    height: 72px;
  }
  [a] {
    float: left;
    margin: 0px -21px;
    transform: skewY(-45deg);
    background: #998235;
  }
  [b] {
    margin: -16px 50px;
    transform: skewY(45deg);
    background: #1A4341;
  }
  [c] {
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    background: #F3AC3C;
  }
</style>
`;
