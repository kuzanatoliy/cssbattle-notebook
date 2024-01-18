module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #F7BED9);
    border-radius: 10px;
  }
  body {
    --b: #EC0076;
    margin: 98px 130px 142px 180px;
  }
  p {
    position: fixed;
    height: 60px;
    width: 110px;
    top: 62px;
    left: 130px;
    --b: #F069AB;
  }
  p + p {
    height: 180px;
    width: 20px;
    top: 44px;
    --b: #8B0051;
  }
</style>
`;
