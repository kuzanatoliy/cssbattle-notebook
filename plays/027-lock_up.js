module.exports = `
<p><p a><p b><p c>
<style>
  body {
    margin: 50px 100px;
    background: #AA445F;
    box-shadow: 0 0 0 100vw #E38F66;
    border-radius: 50%;
  }
  p {
    position: absolute;
    width: 70px;
    height: 70px;
    background: #F7EC7D;
    border-radius: 0 100% 0 0;
    margin: 30px 100px;
  }
  [a], [c] {
    background: #AA445F;
    width: 40px;
    height: 40px;
    margin-top: 60px;
  }
  [b], [c] {
    border-radius: 0 0 0 100px;
    margin: 100px 30px;
  }
  [c] {
    margin-left: 60px;
  }
</style>
`;
