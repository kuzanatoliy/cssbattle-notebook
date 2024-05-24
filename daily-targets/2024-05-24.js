module.exports = `
<p><p><p>
<style>
  * {
    background: #EA6B62;
    * {
      background: #512B2A;
      margin: 80px 110px 140px;
    }
    p {
      position: fixed;
      height: 120px;
      width: 40px;
      margin: -15px 0;
      border-radius: 10px;
    }
    p + p {
      left: 250px;
      & + p {
        height: 200px;
        width: 20px;
        margin: 40px -60px;
      }
    }
  }
</style>
`;
