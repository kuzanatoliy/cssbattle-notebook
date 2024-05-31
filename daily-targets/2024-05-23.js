module.exports = `
<p><p>
<style>
  * {
    background: #611B3F;
    * {
      margin: 45px 100px;
    }
    p {
      background: #BE3184;
      margin: 0 50px;
      height: 50px;
      border-radius: 9in 9in 0 0;
    }
    p + p {
      height: 160px;
      scale: -1;
      margin: 0;
      clip-path: polygon(0 0, 100% 0, 100% 63%, 75% 100%, 25% 100%, 0 63%);
    }
  }
</style>
`;
