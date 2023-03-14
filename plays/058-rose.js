module.exports = `
<p c><p c><p b><p a><p a><p a>
<style>
  * {
    margin: 0;
    background: #191919;
  }
  p {
    position: absolute;
    background: #4F77FF;
  }
  [a] {
    left: 120px;
    top: 75px;
    position: absolute;
    width: 140px;
    height: 30px;
    border: solid 11px #191919;
    border-radius: 15px 15px 35px 35px;
  }
  [a] + [a] {
    left: 140px;
    top: 55px;
    width: 100px;
  }
  [a] + [a] + [a] {
    left: 175px;
    top: 35px;
    width: 30px;
    border-radius: 30px;
  }
  [b] {
    left: 150px;
    top: 115px;
    width: 100px;
    height: 50px;
    border-radius: 0 0 200px 200px;
  }
  [c] {
    background: #F9E492;
    left: 190px;
    top: 145px;
    width: 20px;
    height: 110px;
    border-radius: 20px;
  }
  [c] + [c] {
    left: 180px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
</style>
`;
