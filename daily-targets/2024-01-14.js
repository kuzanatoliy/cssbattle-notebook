module.exports = `
<p><a a><a b><a c></a><p><p>
<style>
  * {
    background: #7C402E;
  }
  body {
    margin: 75px 50px;
  }
  p {
    margin: 0;
    float: left;
    width: 100px;
    height: 100%;
  }
  p + p {
    background: #F1E5DF;
    border-radius: 9in;
    margin-left: 25px;
  }
  p + p + p {
    width: 50px;
  }
  a {
    background: #F1E5DF;
    display: block;
    height: 50px;
    width: 50px;
  }
  [a] {
    float: right;
    border-radius: 0 9in 9in 0;
    height: 100px;
    
  }
  [b] {
    border-radius: 9in;
  }
  [c] {
    margin-top: 50px;
    width: 100px;
  }
</style>
`;
