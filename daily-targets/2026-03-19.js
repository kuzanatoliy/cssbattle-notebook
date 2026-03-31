module.exports = `
<p><p>
<style>
  * {
    background: #A6D6AE;
    body {
      background: #3F4869;
      margin: 70px 55px;
      * {
        height: 30px;
        width: 30px;
        margin: 0;
        color: #A6D6AE;
        box-shadow: 130px 0, 65vw 0, 0 130px, 130px 130px, 65vw 130px;
        & + * {
          height: 35px;
          margin: 0 30px;
          width: 100px;
          box-shadow: 130px 0, 0 65px, 130px 65px;
        }
      }
    }
  }
</style>
`;
