module.exports = `
<p><p>
<style>
  body {
    background: #AA445F;
    margin: 50px 75px;
  }
  p {
    margin: 0;
    float: left;
    width: 100px;
    height: 200px;
    border-radius: 100px 0 0 100px;
    background: #F7EC7D;
  }
  p + p {
    transform: rotate(180deg);
    margin-left: 50px;
    background: #E38F66;
  }
</style>
`;
