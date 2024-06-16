module.exports = `
<dl><p><p><p></dl><dl><p><p><p>
<style>
  * {
    background: #FFFFCD;
    margin: 0;
    body {
      margin: 20px 70px;
    }
    p {
      float: left;
      height: 100%;
      width: 80px;
      color: #EDAF38;
      outline: solid 10px;
    }
    p + p {
      margin-left: 10px;
    }
    dl {
      height: 130px;
    }
    dl + dl {
      margin-top: 20px;
      height: 120px;
      p {
        outline-color: #FFFFCD;
        background: #EDAF38;
      }
    }
  }
</style>
`;
