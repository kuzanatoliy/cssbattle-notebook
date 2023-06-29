module.exports = `
<p a><p b><p c><p d><p e><p e>
<style>
  * {
    margin: 0;
    background: #E38F66;
  }
  p {
    background: #FFFBDA;
    width: 40px;
    height: 40px;
    border-radius: 99q;
    float: left;
    margin: 40px 140px 0;
  }
  [a] {
    width: 120px;
    height: 90px;
    border-radius: 99q 99q 0 0
  }
  [b] {
    margin: 0 110px 0;
    width: 180px;
    height: 20px;
  }
  [c] {
    width: 20px;
    height: 20px;
    margin: 22px 0 0 160px;
  }
  [d] {
    margin: 12px 0 0 30px;
    box-shadow: inset 0 0 0 10px #FFFBDA;
    background: none;
  }
  [e] {
    margin: 18px 0 0 155px;
    border-radius: 99q 99q 0;
    transform: rotate(135deg);
  }
  [e] + [e] {
    margin-left: 10px;
    transform: rotate(-45deg);
  }
</style>
`;
