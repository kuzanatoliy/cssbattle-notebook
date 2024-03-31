module.exports = `
<dl><p><p></dl><dl><p><p></p>
<style>
  * {
    background: #5F0032;
  }
  * * {
    background: #D9D9D9;
    margin: 50px 100px;
  }
  p {
    outline: solid 40px #5F0032;
    height: 40px;
    width: 40px;
    margin: 0;
    float: left;
  }
  p + p {
    margin: 0 40px;
  }
  dl {
    height: 50%;
    margin: 0;
    box-shadow: 130px -30px 0 -30px #D9D9D9;
    & + dl {
      scale: -1;
    }
  }
</style>
`;
