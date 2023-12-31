module.exports = `
<p><p><p>
<style>
  * {
    background: #92278F;
    color: #92278F;
  }
  * * {
    background: #FFF579;
    margin: 75px 65px;
  }
  p {
    margin: 0;
    float: left;
    height: 120px;
    width: 30px;
    box-shadow: 10vh 0, 70vh 0, 40vh 40vh #FFF579;
  }
  p + p {
    height: 30px;
    margin-left: 30px;
    width: 90px;
    box-shadow: 10vh 10vh, -40vh 20vh, 60vh 20vh;
  }
  p + p + p {
    width: 30px;
    box-shadow: -30vh 30vh, -10vh 30vh;
  }
</style>
`;
