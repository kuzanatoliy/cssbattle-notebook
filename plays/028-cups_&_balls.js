module.exports = `
<p><p c b><p b><p c><p c b d><p><p c><p b d>
<style>
  * * {
    background: var(--b, #1A4341);
    margin: 80px 60px;
    [c] {
      --b: #F3AC3C;
    }
    [b] {
      border-radius: 50% 50% 0 0;
    }
    [d] {
      scale: -1;
    }
    p {
      float: left;
      padding: 25px;
      --b: #998235;
      margin: 10px;
      border-radius: 50%;
    }
  }
</style>
`;
