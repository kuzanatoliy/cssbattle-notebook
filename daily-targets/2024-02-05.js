module.exports = `
<p><p><p><p>
<style>
  * {
    background: #05476C;
    margin: 0;
  }
  p {
    position: fixed;
    background: #EFF8FE;
    height: 240px;
    width: 40px;
    top: 30px;
    left: 120px;
    & + p {
      left: 240px;
      & + p {
        height: 40px;
        width: 240px;
        top: 70px;
        left: 80px;
        & + p {
          top: 190px;
        }
      }
    }
  }
</style>
`;
