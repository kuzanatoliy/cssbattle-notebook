module.exports = `
<p l><p><p r>
<style>
  * {
    background: #3F4869;
    body {
      margin: 30px 110px;
    }
    p {
      margin: 0;
      float: left;
      background: radial-gradient(at 0 100%, #3F4869 60px, 0, #E25C57 30vw, 0, #3F4869);
      height: 120px;
      width: 120px;
    }
    p + p {
      scale: -1 1;
    }
    [l] {
      margin-left: 60px;
    }
    [r] {
      height: 60px;
      width: 60px;
      background: #F4DA64;
      margin-top: 60px;
    }
  }
</style>
`;
