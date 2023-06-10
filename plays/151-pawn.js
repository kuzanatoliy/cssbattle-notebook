module.exports = `
<p a><p b><p c><p e a><p e a><p d>
<style>
  body {
    margin: 55px 130px;
    background: #F5D6B4;
  }
  p {
    margin: 5px auto;
    width: 100%;
    background: #D86F45;
  }
  [a] {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  [b] {
    height: 20px;
    width: 80px;
    border-radius: 7px 7px 13px 13px;
  }
  [c] {
    z-index: -1;
    position: relative;
    height: 65px;
  }
  [d] {
    height: 40px;
    border-radius: 20px 20px 10px 10px;
  }
  [e] {
    z-index: -1;
    top: 65px;
    left: 30px;
    position: fixed;
    background: #F5D6B4;
    width: 150px;
    height: 150px;
  }
  [e] + [e] {
    left: 220px;
  }
</style>
`;
