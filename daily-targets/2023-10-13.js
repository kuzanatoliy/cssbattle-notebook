module.exports = `
<style>
  * {
    background: var(--b, #F0CD48);
  }
  * * {
    --b: #66284A;
    margin: 135px 50px;
  }
  p {
    margin: 0;
    height: 100%;
    rotate: 90deg;
  }
  p + p {
    position: fixed;
    --b: #F0CD48;
    border: solid 30px #66284A;
    width: 60px;
    height: 60px;
    border-radius: 9in;
    top: 90px;
    left: 40px;
  }
  p + p + p {
    left: 240px;
  }
</style>
`;
