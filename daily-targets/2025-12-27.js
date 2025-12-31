module.exports = `
<p><p>
<style>
  * {
    background: #F9DDC6;
    body {
      border-radius: 9in;
    }
    * {
      background: #594C94;
      margin: 90px 140px;
      p {
        position: relative;
        outline: solid 5vw #F9DDC6;
        height: 60px;
        margin: 0 0 0 60px;
        top: -20px;
        left: 20px;
        & + p {
          margin: 0 60px 0 0;
          top: 20px;
          left: -20px;
        }
      }
    }
  }
</style>
`;
