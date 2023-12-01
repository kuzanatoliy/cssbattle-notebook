module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #486841);
    margin: 0;
  }
  p {
    --b: #6FB440;
    height: 160px;
    width: 240px;
    margin: 70px 0;
    clip-path: polygon(0 0,35vw 0, 100% 50%, 35vw 100%, 0 100%);
    float: left;
  }
  p + p {
    margin-left: -80px;
    scale: -1;
    --b: #ACEB3F;
  }
</style>
`;
