module.exports = `
<p a><p c b><p b><p c a><p c d><p a><p c a><p d>
<style>
  body {
    background: #1A4341;
    margin: 80px 60px;
  }
  p {
    float: left;
    width: 50px;
    height: 50px;
    background: #998235;
    margin: 10px;
  }
  [c] {
    background: #F3AC3C;
  }
  [a] {
    border-radius: 50%;
  }
  [b] {
    border-radius: 50% 50% 0 0;
  }
  [d] {
    border-radius: 0 0 50% 50%;
  }
</style>
`;
