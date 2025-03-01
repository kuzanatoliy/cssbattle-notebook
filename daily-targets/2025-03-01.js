module.exports = `
<p><p><p>
<style>
  * {
    background: #5AED9C;
    body {
      rotate: 180deg;
      margin: 0 90px 90px 110px;
      p {
        padding: 25px;
        margin: 0 120px;
        box-shadow: 5vh -5vh 0 5vh #4B4D88;
        & + p {
          margin-left: 70px;
          & + p {
            margin: 0 130px 0 20px;
          }
        }
      }
    }
  }
</style>
`;
