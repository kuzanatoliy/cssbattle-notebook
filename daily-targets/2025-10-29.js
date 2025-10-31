module.exports = `
<p><p>
<style>
  * {
    background: #4763B1;
    * {
      background: #D9D9D9;
      margin: 120px 0;
      * {
        height: 60px;
        rotate: 90deg;
        & + * {
          position: fixed;
          border: solid #4763B1;
          height: 40px;
          width: 30px;
          margin: 0;
          inset: 50px 150px;
          border-width: 80px 35px;
        }
      }
    }
  }
</style>
`;
