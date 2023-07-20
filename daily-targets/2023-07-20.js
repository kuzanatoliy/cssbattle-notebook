module.exports = `
<p><p><p a><p>
<style>
  * {
    background: var(--b, #4F77FF);
  }
  p {
    --b: #1038BF;
    position: fixed;
    border-radius: var(--r, 9in);
    width: 40px;
    height: 140px;
    top: 94px;
    left: 75px;
    -webkit-box-reflect: right var(--s, 130px);
  }
  p + p {
    left: 115px;
  }
  [a] {
    --b: #FFF;
    width: 300px;
    height: 160px;
    top: 54px;
    left: 50px;
    --r: 0;
    clip-path: polygon(71px 0, 229px 0, 100% 44%, 100% 100%, 0 100%, 0 44%);
  }
  [a] + p {
    height: 300px;
    top: 34px;
    left: 180px;
    --s: none;
  }
</style>
`;
