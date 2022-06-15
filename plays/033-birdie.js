module.exports = `
<p><p><p a>
<style>
  * {
    margin: 0;
    background: #1A4341;
  }
  p {
    position: fixed;
    width: 75px;
    height: 150px;
    top: 75px;
    left: 125px;
    background: #998235;
    border-radius: 100px 0 0 100px;
  }
  p + p {
    width: 100px;
    height: 100px;
    top: 50px;
    left: 200px;
    background: #F3AC3C;
    border-radius: 0 100px 0 0;
  }
  [a] {
    width: 30px;
    height: 30px;
    top: 105px;
    left: 155px;
    background: #0B2429;
    border-radius: 50%;
  }
</style>
`;
