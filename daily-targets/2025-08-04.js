module.exports = `
<p><p>
<style>
  * * {
    border: solid #EBE77E;
    background: #D94E4E;
  }
  body {
    margin: 10px 10px 170px;
    border-width: 0 0 20px;
    -webkit-box-reflect: below 40px;
    * {
      float: left;
      margin: 0;
      padding: 50px 30px;
      border-width: 20px 20px 0;
      border-radius: 55px 45px 0 0;
      & + * {
        margin-left: 180px;
      }
    }
  }
</style>
`;
