module.exports = `
<p><p><p><p>
<style>
  * {
    background: #5C507C;
    margin: 0;
  }
  p {
    position: fixed;
    background: #C7BFE1;
    width: 40px;
    height: 120px;
    inset: 70px 160px;
    & + p {
      inset: 110px 200px;
      & + p {
        width: 160px;
        height: 40px;
        inset: 150px 60px;
        & + p {
          inset: 110px 180px;
        }
      }
    }
  }
</style>
`;
