module.exports = `
<p a><p b><p c><p d>
<style>
  body {
    background: #E38F66;
  }
  p {
    left: 0px;
    top: 84px;
    position: fixed;
    width: 40px;
    height: 120px;
    border-radius: 20q;
    background: #FFFBDA;
  }
  [c] {
    left: 80px;
    top: 164px;
  }
  [b], [d] {
    height: 40px;
    width: 120px;
    top: 164px;
    box-shadow: -30px 30px 0 -10px #E38F66, 30px -30px 0 -10px #E38F66, 0 20px 0 -15px  #FFFBDA, 0 -20px 0 -15px  #FFFBDA;
  }
  [d] {
    left: 80px;
    top: 244px;
  }
</style>
`;
