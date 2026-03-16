module.exports = `
<p><p>
<style>
  * {
    background: #8BFA94;
    body {
      background: #556D7F;
      margin: 15px 100px;
      * {
        float: left;
        padding: 75px 25px;
        margin: 50px 20px;
        & + * {
          padding: 100px 25px;
          margin: 70px 0 0 40px;
        }
      }
    }
  }
</style>
`;
