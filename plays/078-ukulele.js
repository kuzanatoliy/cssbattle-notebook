module.exports = `
<p c><p a><p b><p d><p e><p f><p f>
<style>
  body {
    background: #F3AC3C;
  }
  p {
    position: fixed;
    border-radius: 99q;
    background: #1A4341;
  }
  [a] {
    width: 120px;
    height: 120px;
    left: 45px;
    top: 74px;
    background: #998235;
  }
  [b] {
    left: 140px;
    top: 109px; 
    width: 40px;
    height: 40px;
    border: solid 5px #F3AC3C;
    outline: solid 26px #998235;
  }
  [c] {
    width: 140px;
    height: 20px;
    left: 200px;
    top: 124px;
  }
  [d] {
    width: 40px;
    height: 30px;
    left: 315px;
    top: 119px;
    border-radius: 10q;
    background: #998235;
  }
  [e] {
    width: 10px;
    height: 40px;
    left: 85px;
    top: 114px;
  }
  [f] {
    width: 20px;
    height: 4px;
    left: 325px;
    top: 127px;
  }
  [f] + [f] {
    top: 137px;
  }
</style>
`;
