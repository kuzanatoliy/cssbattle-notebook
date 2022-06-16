module.exports = `
<p a><p b><p b>
<style>
  * {
    background: #1A4341;
  }
  body {
    margin: 60px;
  }
  [a] {
    margin: 0;
    background: repeating-linear-gradient(#F3AC3C, #F3AC3C 20px, #1A4341 20px, #1A4341 40px);
    width: 100%;
    height: 100%;
    float: left;
  }
  [b] {
    position: fixed;
    top: 0;
    left: -150px;
    margin: 0;
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
  [b] + [b] {
    left: 250px;
  }
</style>
`;
