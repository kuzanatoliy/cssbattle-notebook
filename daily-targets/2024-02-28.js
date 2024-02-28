module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  * {
    background: #0C6DA2;
    margin: 0;
  }
  p {
    background: #ACDDF9;
    color: #ACDDF9;
    height: 50px;
    margin: 0 0 0 180px;
    box-shadow: 0 0 0 5vw #0C6DA2, 0 0 0 10vw;
  }
  p + p {
    height: 60px;
    margin-right: 180px;
    box-shadow: 10px 10px 0 10px #0C6DA2, -10px 10px 0 10px #0C6DA2, 10vw 10vw, -10vw 10vw, 0 10vw;
  }
  dl {
    height: 50%;
    & + dl {
      scale: -1;
    }
  }
</style>
`;
