module.exports = `
<p c><p a><p a><p b><p b>
<style>
  * {
    background: #191919;
    position: fixed;
  }
  body {
    margin: 61px 89px;
  }
  [a] {
    width: 114px;
    height: 114px;
    border-radius: 0 50% 50%;
    background: #E08027;
  }
  [a] + [a] {
    right: 89px;
    transform: scaleX(-1);
    outline: solid 10px #191919;
  }
  [c] {
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    top: 146px;
    left: 176px;
    background: #E08027;
  }
  [b] {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    left: 101px;
    top: 73px;
    -webkit-box-reflect: right 18px;
  }
  [b] + [b] {
    width: 12px;
    height: 6px;
    border-radius: 50px 50px 0 0;
    left: 132px;
    top: 109px;
    border: solid 9px #E08027;
    border-bottom: 0;
    -webkit-box-reflect: right 78px;
  }
</style>
`;
