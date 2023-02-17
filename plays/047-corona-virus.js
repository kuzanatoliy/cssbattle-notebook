module.exports = `
<p><p l><p l><p l><p a><p b><p c>
<style>
  body {
    background: #1A4341;
  }
  p {
    background: #F3AC3C;
    border-radius: 50px;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 84px;
    left: 150px;
  }
  [a] {
    width: 30px;
    height: 30px;
    top: 104px;
    left: 170px;
  }
  [b] {
    width: 20px;
    height: 20px;
    top: 149px;
    left: 190px;
  }
  [c] {
    width: 10px;
    height: 10px;
    top: 104px;
    left: 220px;
  }
  [l] {
    width: 180px;
    height: 10px;
    top: 124px;
    left: 119px;
    transform: rotate(-30deg);
  }
  [l] + [l] {
    top: 133px;
    transform: rotate(30deg);
  }
  [l] + [l] + [l] {
    top: 119px;
    left: 110px;
    transform: rotate(90deg);
  }
  [a], [b], [c] {
    background: #998235;
  }
</style>
`;
