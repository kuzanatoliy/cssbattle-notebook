module.exports = `
<p a><p><p><p><dl>
<style>
  * {
    margin: 0;
    border-radius: 30px;
    background: var(--b, #6592CF);
    color: #060F55;
  }
  body {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
  }
  p {
    width: 170px;
    height: 120px;
  }
  [a] {
    box-shadow: 115px 70px 0 15px, 115px 110px 0 15px;
  }
  dl {
    position: fixed;
    left: 170px;
    top: 120px;
    width: 60px;
    height: 60px;
    box-shadow: 95px 0, -95px 0, 0 95px, 0 -95px;
  }
</style>
`;
