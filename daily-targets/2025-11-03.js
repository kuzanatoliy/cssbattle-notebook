module.exports = `
<p><p><p>
<style>
  * {
    background: #62306D;
    * {
      background: #E38F66;
      border-radius: 9in;
      margin: 75px 125px;
      p {
        position: fixed;
        padding: 70px 12px 0 13px;
        top: -91px;
        left: 40px;
        color: #E38F66;
        box-shadow: 22px 0, 45px 0;
        & + p {
          top: 90px;
          & + p {
            top: 188px;
          }
        }
      }
    }
  }
</style>
`;
