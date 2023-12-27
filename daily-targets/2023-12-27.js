module.exports = `
<p><p a><p><dl>
<style>
  * {
    background: var(--b, #F2644D);
  }
  * * {
    margin: 90px 100px;
  }
  p {
    margin: 0;
    --b: #FFF;
    height: 30px;
  }
  [a] {
    --b: #6DA7FF;
    height: 10px;
  }
  p + p {
    margin: 0 10px;
    height: 80px;
  }
  dl {
    --b: #6DA7FF;
    position: fixed;
    width: 30px;
    height: 55px;
    margin: -80px 140px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 35px, 0 100%);
  }
</style>
`;
