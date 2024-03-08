module.exports = `
<dl><dl></dl></dl><dl></dl><p><p>
<style>
  * {
    background: var(--b, #D669EC);
    margin: 0;
  }
  body {
    margin: 60px 55px;
  }
  p {
    position: fixed;
    height: 180px;
    width: 20px;
    left: 275px;
  }
  p + p {
    height: 20px;
    --b: #FDFBF8;
    width: 90px;
    left: 80px;
    top: 140px;
  }
  dl {
    position: relative;
    --b: #FDFBF8;
    width: 80px;
    height: 80px;
    top: 50px;
    float: left;
    clip-path: polygon(100% 100%, 100% 0, 0 50%);
    & + dl {
      top: 0;
      margin-left: 30px;
      width: 180px;
      height: 180px;
      scale: -1;
    }
    & > dl {
      --b: #D669EC;
      top: 15px;
      height: 50px;
      left: 30px;
      width: 50px;
    }
  }
</style>
`;
