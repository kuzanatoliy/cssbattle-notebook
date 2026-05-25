module.exports = `
<p><p>
<style>
  * {
    background: #F8D2D1;
    body {
      background: #DE6B67;
      margin: 20px 340px 20px 20px;
      -webkit-box-reflect: right 70vw;
      * {
        position: fixed;
        padding: 30px 30px;
        bottom: 4px;
        left: 20px;
        border: solid 40px #DE6B67;
        border-bottom: 0;
        & + * {
          left: 100px;
          border-left: 0;
          padding: 60px 40px;
          border-color: #2F5A76;
          background: 0;
        }
      }
    }
  }
</style>
`;
