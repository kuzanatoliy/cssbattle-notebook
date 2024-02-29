module.exports = `
<dl><p><p><p></dl><dl><p><p><p>
<style>
  * {
    background: #5F0032;
  }
  body {
    margin: 30px 50px;
  }
  p {
    height: 100px;
    width: 100px;
    background: #F180B6;
    border-radius: 9in;
    float: left;
    margin: 10px 0;
  }
  p + p {
    width: 50px;
    border-radius: 0 9in 9in 0;
  }
  dl {
    padding-left: 100px;
    height: 112px;
    & + dl {
      scale: -1;
    }
  }
</style>
`;
