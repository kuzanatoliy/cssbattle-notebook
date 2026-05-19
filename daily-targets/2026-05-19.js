module.exports = `
<p><p>
<style>
  * {
    background: #EFEADE;
    * {
      background: #B29DF7;
      margin: 50px 100px;
      * {
        margin: 0;
        width: 40px;
        height: 40px;
        color: #EFEADE;
        box-shadow: 80px 0, 0 80px, 40vw 80px, 80px 40vw;
        & + * {
          color: #594F7C;
          box-shadow: 40px 0, 30vw 0, 40px 80px, 30vw 80px;
        }
      }
    }
  }
</style>
`;
