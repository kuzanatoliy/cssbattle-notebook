module.exports = `
<div><p><div>
<style>
  body {
    margin: 25px 75px;
    background: #1A4341;
  }
  * {
    position: absolute;
  }
  div {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
  }
  div > div {
    margin: 25px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #998235;
  }
  p {
    margin-top: 55px;
    height: 140px;
    width: 100%;
    background: repeating-linear-gradient(#1A4341, #1A4341 20px, #F3AC3C 20px, #F3AC3C 40px);
    z-index: 1;
  }
</style>
`;
