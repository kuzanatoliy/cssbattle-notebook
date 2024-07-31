module.exports = `
<p><p>
<style>
  * {
    background: #BE3184;
    * {
      background: #611B3F;
      margin: 110px 120px;
    }
    p {
      position: relative;
      float: left;
      width: 80px;
      height: 80px;
      margin: 0;
      border-radius: 9in 0 0 9in;
      top: 40px;
      left: -80px;
    }
    p + p {
      top: -40px;
      scale: -1;
      left: 80px;
    }
  }
</style>
`;
