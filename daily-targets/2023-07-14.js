module.exports = `
<p><p>
<style>
  * {
    background: #62306D;
  }
  body {
    margin: 50px 130px 110px;
    border-radius: 9in;
    box-shadow: inset 0 0 0 20px #F7EC7D;
  }
  p {
    position: fixed;
    width: 0;
    border: solid 45px #F7EC7D;
    border-bottom: 35px;
    top: 155px;
    left: 155px;
  }
  p + p {
    scale: -1 1;
    top: 174px;
    border-top: none;
    border-bottom: solid 60px #62306D;
  }
</style>
`;
