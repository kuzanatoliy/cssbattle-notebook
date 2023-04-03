module.exports = `
<p><p><div><p>
<style>
  body {
    margin: 0;
    background: #62306D;
  }
  p, div {
    position: fixed;
    width: 75px;
    height: 75px;
    background: #F7EC7D;
    top: 84px;
  }
  p {
    border-radius: 50%;
  }
  p + p {
    top: 209px;
    left: 125px;
  }
  div {
    top: 139px;
    height: 170px;
    width: 168px;
  }
  div > p {
    background: #62306D;
    left: 75px;
    top: 119px;
    border-radius: 0 0 0 25px;
    height: 90px;
    width: 95px
  }
</style>
`;
