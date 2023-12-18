module.exports = `
<dl><dl><p><p>
<style>
  * {
    background: #371948;
    margin: 0;
  }
  dl {
    height: 60px;
    width: 70px;
    border: solid 30px #B0ACD5;
    border-bottom: none;
    margin: 60px 85px;
    & dl {
      margin-left: 70px;
    }
  }
  p {
    position: fixed;
    height: 60px;
    width: 30px;
    background: #B0ACD5;
    inset: 0 85px;
  }
  p + p {
    inset: 240px 285px;
  }
</style>
`;
