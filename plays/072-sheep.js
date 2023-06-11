module.exports = `
<div><p><p a r><p b r><p c><p d>
<style>
  body {
    margin: 75px 150px;
    background: #243D83;
  }
  p {
    top: 49px;
    left: 170px;
    position: fixed;
    background: #6592CF;
    width: 60px;
    height: 50px;
    border-radius: 50%;
    -webkit-box-reflect: below 70px;
  }
  [r] {
    top: 69px;
    -webkit-box-reflect: below 63px;
  }
  [a] {
    left: 130px;
    transform: rotate(-45deg);
  }
  [b] {
    left: 210px;
    transform: rotate(45deg);
  }
  [c] {
    top: 109px;
    left: 230px;
    transform: rotate(90deg);
  }
  [d] {
    width: 10px;
    height: 10px;
    -webkit-box-reflect: right 10px;
    top: 114px;
    left: 185px;
  }
  div {
    width: 60px;
    height: 80px;
    border-radius: 55q;
    border: solid 20px #6592CF;
  }
</style>
`;
