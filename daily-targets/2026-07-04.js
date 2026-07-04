module.exports = `
<p><p><p>
<style>
  * {
    background: #D35C72;
    color: #D35C72;
    * {
      background: #EFEB99;
      margin: 40px 130px;
      * {
        float: left;
        padding: 10px;
        margin: 30px 100px 110px 0;
        box-shadow: 20px 0, 70px 0;
        & + * {
          margin: 0 100px 0 0;
          padding: 15px;
          box-shadow: 30px 0, 50px 0, 110px 0;
          & + p {
            margin: 0 0 0 30px;
            box-shadow: 30px 0, 50px 0, -30px 0;
          }
        }
      }
    }
  }
</style>
`;
