module.exports = `
<p><p>
<style>
  * {
    background: #FADE8B;
    color: #E3516E;
    border-radius: var(--r, 9in);
  }
  body {
    margin: 100px 130px 60px;
    box-shadow: 0 0 0 9in;
  }
  p {
    position: relative;
    width: 40px;
    height: 40px;
    top: 75px;
    left: 50px;
    box-shadow: 0 0 0 10px;
  }
  p + p {
    width: 90px;
    height: 60px;
    top: -96px;
    left: 25px;
    --r: 45px 45px 10px 10px;
    box-shadow: 0 0 0 10px, 20px 10px, -20px 10px;
  }
</style>
`;
