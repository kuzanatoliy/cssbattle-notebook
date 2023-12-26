module.exports = `
<div><p><p><p><dl>
<style>
  * {
    position: relative;
  }
  body {
    background: #642328;
    color: #642328;
    margin: 50px;
  }
  div {
    height: 100%;
    overflow: hidden;
  }
  p {
    margin: 0;
    background: #FFF;
    height: 80px;
    width: 80px;
    border-radius: 9in;
    left: 110px;
  }
  p + p {
    height: 120px;
    width: 120px;
    left: 90px;
    top: -20px;
  }
  p + p + p {
    height: 160px;
    width: 160px;
    left: 70px;
    top: -95px;
    box-shadow: -5vh -50vh 0 -70px, 5vh -50vh 0 -70px;
  }
  dl {
    top: -316px;
    left: 110px;
    height: 15px;
    width: 80px;
    background: #FF8D7A;
  }
</style>
`;
