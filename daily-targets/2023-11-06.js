module.exports = `
<p><p><dl><p>
<style>
  * {
    margin: 0;
    position: fixed;
    background: #302562;
  }
  p {
    height: 60px;
    width: 60px;
    border: solid 20px #0098D1;
    border-radius: 9in;
    inset: 40px 150px;
    -webkit-box-reflect: var(--r, below 20px);
    transform-origin: 50% 110px;
  }
  p + p {
    rotate: 90deg;
  }
  dl {
    width: 120px;
    height: 120px;
    inset: 90px 140px;
  }
  dl > p {
    top: 100px;
    --r: n;
  }
</style>
`;
