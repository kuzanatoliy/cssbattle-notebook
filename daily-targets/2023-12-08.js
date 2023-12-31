module.exports = `
<div><p><p>
<style>
  * {
    background: #5B8395;
  }
  body {
    margin: 70px 80px;
  }
  * * {
    background: #E3F5FD;
  }
  div {
    height: 100%;
    overflow: hidden;
  }
  p {
    height: 160px;
    width: 160px;
    outline: solid 30px #5B8395;
    rotate: 45deg;
    margin: 0 0 0 -115px;
    float: left;
  }
  p + p {
    margin: 0 -140px 0 150px;
  }
</style>
`;
