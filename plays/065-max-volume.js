module.exports = `
<p><p b><div><div a><div c>
<style>
  body {
    background: #191919;
    margin: 50px 75px;
  }
  p {
    width: 50px;
    height: 50px;
    float: left;
    background: #5DBCF9;
    margin-top: 75px;
    border-radius: 10px 0 0 10px;
  }
  p + p {
    height: 200px;
    width: 75px;
    margin: 0;
    clip-path: polygon(100% 0, 100% 100%, 0 62%, 0 38%);
  }
  div {
    width: 89px;
    height: 180px;
    background: #191919;
    position: fixed;
    left: 225px;
    top: 50px;
    border: solid #5DBCF9;
    border-radius: 0 100px 100px 0;
    border-width: 10px 10px 10px 0;
  }
  [a] {
    width: 64px;
    height: 130px;
    top: 75px;
  }
  [c] {
    width: 39px;
    height: 80px;
    top: 100px;
  }
</style>
`;
