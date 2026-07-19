module.exports = `
<p><p>
<style>
  * {
    background: #E38F66;
    border: solid 5vw;
    margin: 80px 240px 80px 20px;
    * {
      margin: -20px -240px -20px 200px;
      * {
        position: fixed;
        inset: 35vw 95vw 35vw -30vw;
        background: #000;
        & + * {
          inset: 30vw 80px 30vw 300px;
          border: 0;
          margin: 0;
        }
      }
    }
  }
</style>
`;
