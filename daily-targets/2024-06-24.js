module.exports = `
<dl><p><p b><p a><p a></dl><dl><p><p b><p a><p a>
<style>
  * {
    background: #EDAF38;
    margin: 0;
    dl {
      height: 140px;
      margin-bottom: 20px;
      & + dl {
        scale: -1;
      }
    }
    p {
      float: left;
      height: 140px;
      width: 30px;
      background: #FFFFCD;
    }
    [b] {
      margin: 0 70px 0 30px;
    }
    [a] {
      height: 30px;
      width: 240px;
      margin-bottom: 30px;
    }
  }
</style>
`;
