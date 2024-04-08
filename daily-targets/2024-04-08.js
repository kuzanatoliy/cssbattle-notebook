module.exports = `
<p><a><a><p r><a><a><p><a><a><p r><a><a><p><a><a>
<style>
  * {
    background: #010038;
    * {
      margin: 0 5px;
    }
    p {
      height: 300px;
      float: left;
      width: 60px;
      margin: 0 0 0 15px;
    }
    a {
      display: block;
      background: #857DA1;
      height: 120px;
      margin: 0 15px;
    }
    a + a {
      height: 60px;
      margin: -30px 0;
      border-radius: 9in;
    }
    [r] {
      scale: -1;
    }
  }
</style>
`;
