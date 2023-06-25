module.exports = `
<p a><div><p b><p c><p d><p e><p i>
<style>
  body {
    background: #F3AC3C;
  }
  p, div {
    position: absolute;
    background: #1A4341;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  [a] {
    border: solid 10px #998235;
    -webkit-box-reflect: right 50px;
    left: 115px;
    top: 49px;
  }
  [b] {
    width: 20px;
    height: 20px;
    left: 25px;
    top: 44px;
    -webkit-box-reflect: right 60px;
  }
  [c] {
    width: 100px;
    left: 25px;
    top: 79px;
    background: #fff;
    border-radius: 12px 12px 30px 30px;
  }
  [d] {
    top: -39px;
    left: 55px;
    border-radius: 0;
    transform: rotate(45deg);
  }
  [e] {
    top: 69px;
    left: 70px;
    width: 10px;
    height: 25px;
    border-radius: 0;
  }
  [i] {
    top: 89px;
    left: 40px;
    width: 20px;
    height: 10px;
    border: solid 10px #1A4341;
    border-top: none;
    border-radius: 0 0 30px 30px;
    background: none;
    -webkit-box-reflect: right -10px;
  }
  div {
    left: 125px;
    top: 75px;
    width: 150px;
    height: 150px;
    border-radius: 50% 50% 40% 40%;
    background: #998235;
    overflow: hidden;
  }
</style>
`;
