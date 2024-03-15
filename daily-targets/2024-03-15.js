module.exports = `
<p><p><dl>
<style>
  * {
    background: var(--b, #FFFFCD);
    * {
      margin: 50px 80px;
    }
  }
  dl {
    --b: #E78320;
    height: 160px;
    margin: 0 40px;
    clip-path: polygon(48q 0, 0 100%, 100% 100%, 121q 0);
  }
  p {
    position: fixed;
    height: 20px;
    width: 200px;
    --b: #EDAF38;
    border-radius: 9in;
    margin: 160px 20px;
  }
  p + p {
    margin: 180px 0;
    width: 240px;
    --b: #F1D31D;
  }
</style>
`;
