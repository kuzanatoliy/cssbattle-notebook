module.exports = `
<p><p><p><p a><p b>
<style>
  * {
    background: #FEFAE0;
  }
  * * {
    border-radius: 9in;
    margin: 40px 90px;
    box-shadow: inset 0 0 0 5vw #9CCCDB;
  }
  p {
    position: fixed;
    width: 80px;
    height: 80px;
    background: #9CCCDB;
    margin: 70px;
  }
  p + p {
    height: 110px;
    width: 20px;
    margin: 0 100px;
    transform-origin: 50% 100%;
  }
  [a] {
    rotate: 120deg;
  }
  [b] {
    rotate: -120deg;
  }
</style>
`;
