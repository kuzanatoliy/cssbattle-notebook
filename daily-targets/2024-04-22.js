module.exports = `
<p a><p a><p b><a></a><p b>
<style>
  * {
    background: #4F77FF;
    margin: 0;
  }
  body {
    padding: 70px 50px;
  }
  p {
    float: right;
    width: 80px;
    height: 80px;
    margin: 0 10px;
    border-radius: 9in;
  }
  [a] {
    box-shadow: inset 0 0 0 5vw #EFF8FE;
    height: 160px;
  }
  [b] {
    background: #EFF8FE;
    border-radius: 0 9in 9in 0;
  }
  a {
    height: 50px;
    width: 60px;
    display: block;
    margin: 20px 0;
    border-radius: 0 9in 9in 0;
    -webkit-box-reflect: below 5vw;
  }
</style>
`;
