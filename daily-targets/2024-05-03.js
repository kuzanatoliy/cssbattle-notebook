module.exports = `
<p><p>
<style>
  * {
    background: #F59426;
    margin: 0;
    body {
      margin: 75px;
    }
    p {
      float: left;
      background: linear-gradient(#FFF 50px, 0, #F59426 60px, 0, #FFF);
      width: 120px;
      height: 150px;
    }
    p + p {
      margin-left: 10px;
      scale: -1;
    }
  }
</style>
`;
