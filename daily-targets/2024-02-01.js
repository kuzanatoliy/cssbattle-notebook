module.exports = `
<p><p><p><p>
<style>
  * {
    background: #D5EDFC;
  }
  body {
    background: #06487A;
    margin: 60px;
  }
  p {
    width: 40px;
    height: 100px;
    float: left;
    margin: 40px 0;
    & + p {
      margin-left: 40px;
    }
  }
</style>
`;
