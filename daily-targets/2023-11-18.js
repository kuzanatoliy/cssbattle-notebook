module.exports = `
<dl><p a><p b><p c><p d><p e>
<style>
  * {
    background: #C6DD7F;
  }
  * * {
    border-radius: 9in;
  }
  body {
    margin: 50px 100px;
  }
  dl {
    overflow: hidden;
    height: 100%;
  }
  p {
    margin: 0;
    width: 200px;
    height: 200px;
    position: relative;
    background: #486841;
  }
  [a] {
    left: -150px;
  }
  [b] {
    top: -200px;
    left: 150px;
  }
  [c] {
    top: -550px;
  }
  [d] {
    top: -450px;
  }
  [e] {
    border-radius: 0;
    top: -725px;
    left: 75px;
    height: 50px;
    width: 50px;
  }
</style>
`;
