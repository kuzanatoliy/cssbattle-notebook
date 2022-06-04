module.exports = `
<p a><p b><p c><p d><p e><p f>
<style>
  body {
    margin: 100px;
    background: linear-gradient(90deg, #F7EC7D 60%, 0, #E38F66);
    box-shadow: 0px 0px 0px 100px #62306D;
  }
  p {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    background: #62306D;
  }
  [a], [b] {
    left: 80px;
  }
  [a], [c] {
    top: 64px;
  }
  [c], [d] {
    left: 280px;
  }
  [b], [d] {
    top: 164px;
  }
  [e], [f] {
    width: 20px;
    height: 20px;
    left: 230px;
  }
  [e] {
    top: 74px;
  }
  [f] {
    top: 174px;
  }
</style>
`;
