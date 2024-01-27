module.exports = `
<dl><p></dl><dl><p>
<style>
  * {
    background: #FFFFA5;
    margin: 0;
  }
  p {
    height: 80px;
    width: 80px;
    margin: 80px 20px;
    border-radius: 9in;
  }
  dl {
    background: #FABA41;
    height: 180px;
    width: 120px;
    float: left;
    margin-left: 60px;
    border-radius: 0 0 9in 9in;
    & + dl {
      margin-left: 40px;
      scale: -1;
      position: relative;
      top: 120px;
    }
  }
</style>
`;
