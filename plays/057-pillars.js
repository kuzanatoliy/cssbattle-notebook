module.exports = `
<p a><p b><p c><p d><p y a><p y b><p y c><p y d><p s a><p s b><p s c><p s d>
<style>
  * {
    margin: 0;
    background: #191919;
  }
  body {
    position: relative;
    margin: 95px 145px;
    background: #4F77FF;
  }
  p {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  [a], [b] {
    top: -20px;
  }
  [b], [d] {
    right: -20px;
  }
  [c], [d] {
    bottom: -20px;
  }
  [a], [c] {
    left: -20px;
  }
  [y] {
    background: #F9E492;
    width: 45px;
    height: 45px;
  }
  [s] {
    background: #4F77FF;
    width: 30px;
    height: 30px;
  }
</style>
`;
