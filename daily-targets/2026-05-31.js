module.exports = `
<p><p a><p>
<style>
  * * {
    background: #556D7F;
    margin: 50px 10px;
    [a] {
      height: 140px;
      margin: 0 95px;
      --a: 30px;
      --b: 40vw;
    }
    p {
      margin: 0;
      height: 30px;
      background: repeating-linear-gradient(90deg, #F4DCBF 0, #F4DCBF var(--a, 60px), 0, #556D7F var(--b, 80px));
    }
  }
</style>
`;
