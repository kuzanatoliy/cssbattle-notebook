module.exports = `
<p><p>
<style>
  * {
    background: #2F434E;
    margin: 15px 35px;
    p {
      background: radial-gradient(circle at 50% 100%, #2F434E var(--s, 95q), 0, var(--c, #F8B140));
      height: 140px;
      margin: 0 0 20px;
      & + p {
        height: 80px;
        scale: -1;
        --s: 53q;
        --c: #CF6939;
      }
    }
  }
</style>
`;
