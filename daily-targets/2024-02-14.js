module.exports = `
<p><p a><p b><p a><p><p c>
<style>
  * {
    background: #2F2E59;
    margin: 0;
  }
  body {
    display: flex;
    margin: 60px 95px;
    gap: 5vh;
  }
  p {
    height: 120px;
    width: 30px;
    border-radius: 9in;
    background: #EEECF6;
  }
  [a] {
    height: 150px;
  }
  [b] {
    height: 180px;
  }
  [c] {
    position: fixed;
    width: 210px;
    height: 30px;
  }
</style>
`;
