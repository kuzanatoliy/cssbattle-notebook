module.exports = `
<p><p>
<style>
  * {
    background: #284A5B;
    * {
      position: fixed;
      background: #E38F66;
      margin: 0;
      inset: 100px 95px 40px;
      * {
        inset: 80px 125px 40px;
        & + * {
          border: solid 10px #E38F66;
          border-bottom: 0;
          background: #284A5B;
          inset: 40px 40vw;
          border-radius: 9in 9in 0 0;
        }
      }
    }
  }
</style>
`;
