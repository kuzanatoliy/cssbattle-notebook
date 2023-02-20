module.exports = `
<p a><p b><p><p b><p c><p c><p d>
<style>
  * {
    background: #F9E492;
  }
  body {
    margin: 75px 147px;
  }
  p {
    margin: 0;
    float: right;
    width: 20px;
    height: 55px;
    border: solid 3px #F9E492;
    border-radius: 15px;
    background: #191919;
  }
  [a] {
    height: 35px;
    margin-top: 20px;
  }
  [b] {
    height: 45px;
    margin-top: 10px;
  }
  [c] {
    width: 100px;
    height: 40px;
    border-radius: 0 0 12px 12px;
  }
  [c] + [c] {
    border: 0;
    margin: -10px 28px;
    width: 50px;
    height: 53px;
    border-radius: 0 0 10px 10px;
  }
  [d] {
    top: 104px;
    left: 152px;
    height: 65px;
    position: absolute;
    border-width: 5px;
    transform: rotate(60deg);
  }
</style>
`;
