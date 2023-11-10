module.exports = `
<div><p><p a><p b><p a c>
<style>
  * {
    background: #FBC3E4;
  }
  body {
    margin: 50px 100px;
  }
  div {
    height: 100%;
    overflow: hidden;
  }
  p {
    width: 80px;
    height: 80px;
    border-radius: 0 0 9in;
    outline: solid 40px #8C0052;
    margin: 0 0 40px;
    float: left;
  }
  [a] {
    rotate: 90deg;
    margin-left: 40px;
  }
  [b] {
    rotate: 270deg;
  }
  [c] {
    rotate: 180deg;
  }
</style>
`;
