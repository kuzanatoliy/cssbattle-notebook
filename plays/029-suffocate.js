module.exports = `
<p a><p b><p c><p d>
<style>
  * {
    background: #1A4341;
    margin: 0;
  }
  p {
    float: left;
    width: 50vw;
    height: 50vh;
    background: #F3AC3C;
  }
  [a] {
    border-radius: 0 0 100px 0;
  }
  [b] {
    border-radius: 0 0 0 100px;
  }
  [c] {
    border-radius: 0 100px 0 0;
  }
  [d] {
    border-radius: 100px 0 0 0;
  }
</style>
`;
