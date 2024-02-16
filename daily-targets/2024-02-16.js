module.exports = `
<p><p>
<style>
  * {
    background: #024817;
  }
  * * {
    background: #CCE9D3;
    margin: 75px 140px;
  }
  p {
    position: fixed;
    width: 40px;
    height: 190px;
    margin: 0;
    inset: 55px 45vw;
    & + p {
      width: 200px;
      height: 40px;
      inset: 115px 85px;
      border: solid 5vh #024817;
    }
  }
</style>
`;
