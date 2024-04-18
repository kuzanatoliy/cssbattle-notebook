module.exports = `
<p><p>
<style>
  * {
    background: #611B3F;
    * {
      background: #BE3184;
      margin: 0;
    }
    body {
      margin: 100px 150px;
      border-radius: 9in;
    }
    p {
      position: fixed;
      left: 50%;
      top: 0;
      width: 200px;
      height: 100px;
      border-radius: 0 0 0 80px;
    }
    p + p {
      top: 200px;
      left: 0;
      scale: -1;
    }
  }
</style>
`;
