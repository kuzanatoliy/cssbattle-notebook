module.exports = `
<p><p>
<style>
  * {
    background: #F6E49C;
    * {
      background: #2F5C24;
      margin: 110px 90px;
      * {
        position: fixed;
        border-radius: 0 9in;
        padding: 40px;
        top: 30px;
        margin: 0;
        left: 10px;
        -webkit-box-reflect: right 55vw;
        & + * {
          top: 190px;
          border-radius: 9in 0 9in;
        }
      }
    }
  }
</style>
`;
