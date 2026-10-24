module.exports = `
<p><dl><p><p></dl><p>
<style>
  * {
    background: #5065AB;
    * {
      margin: 70px 10px;
      dl {
        border-width: 20px;
        height: 60px;
        margin: 30px 10px;
        width: 240px;
        * {
          height: 20px;
          margin: 10px 20px;
          & + p {
            margin-left: 141px
          }
        }
      }
      * {
        border: solid 10px #CBCDB7;
        float: left;
        margin: 0 10px;
        height: 140px;
        border-radius: 10px
      }
    }
  }
</style>
`;
