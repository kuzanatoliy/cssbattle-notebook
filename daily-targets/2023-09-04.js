module.exports = `
<p a><p b><p c>
<style>
  * {
    background: #F0CD48;
  }
  * * {
    margin: 40px 150px;
  }
  p {
    margin: 10px 0;
    width: 100%;
    background: #66284A;
  }
  [a] {
    height: 50px;
    border-radius: 20px 20px 0 0;
  }
  [b] {
    height: 100px;
  }
  [c] {
    height: 50px;
    clip-path: polygon(0 0, 50% 100%, 100% 0);
  }
</style>
`;
