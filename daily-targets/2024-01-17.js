module.exports = `
<p><p><p a><p a>
<style>
  * {
    background: var(--b, #D8B788);
    border-radius: 10px;
    margin: 0;
  }
  body {
    --b: #684C3B;
    margin: 70px 140px 50px;
  }
  p {
    position: fixed;
    width: 40px;
    height: 40px;
    top: 50px;
    left: 180px;
  }
  p + p {
    --b: #D8B788;
    width: 140px;
    height: 20px;
    top: 90px;
    left: 130px;
  }
  [a] {
    width: 20px;
    height: 80px;
    top: 140px;
    left: 170px;
  }
  [a] + [a] {
    left: 210px;
  }
</style>
`;
