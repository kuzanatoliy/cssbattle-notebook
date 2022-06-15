module.exports = `
<p a><p><p a><p><p a>
<style>
  body {
    margin: 0 25px;
    background: #1A4341;
    display: flex;
    justify-content: space-between;
  }
  p {
    margin: 0;
    width: 50px;
    height: 200px;
    background: #998235;
    border-radius: 0 0 50px 50px;
  }
  [a] {
    align-self: flex-end;
    transform: rotateX(180deg);
    background: #F3AC3C;
  }
</style>
`;
