module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  * {
    background: #D8EFDD;
    margin: 0;
  }
  dl {
    height: 50%;
    & + dl {
      scale: -1;
    }
  }
  p {
    height: 40px;
    width: 60px;
    margin: 65px 70px 0;
    float: left;
    border: solid 30px #0D1335;
    border-bottom: none;
    border-radius: 9in 9in 0 0;
  }
  p + p {
    margin-inline: -100px;
  }
</style>
`;
