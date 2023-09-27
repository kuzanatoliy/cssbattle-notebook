module.exports = `
<p><p>
<style>
  * {
    background: #8D1C24;
  }
  * * {
    background: #EC9140;
    margin: 0 270px 0 90px;
  }
  p {
    position: fixed;
    height: 40px;
    width: 150px;
    right: 0;
    top: 130px;
  }
  p + p {
    border-radius: 9in;
    height: 60px;
    width: 60px;
    right: -100px;
    top: 120px;
  }
  body {
    -webkit-box-reflect: right 140px;
  }
</style>
`;
