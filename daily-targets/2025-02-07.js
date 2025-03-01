module.exports = `
<p r><p>
<style>
  * {
    background: #EA9A52;
    color: #96551A;
    * {
      margin: 30px -20px;
      p {
        border: solid 40px;
        margin: 0;
        height: 70px;
        width: 160px;
        border-radius: 9in 9in 0 0;
        border-width: 40px 40px 20px;
      }
      p + p {
        scale: -1;
        margin: -20px 100px;
      }
      [r] {
        -webkit-box-reflect: right -40px;
      }
    }
  }
</style>
`;
