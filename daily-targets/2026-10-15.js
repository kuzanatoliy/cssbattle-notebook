module.exports = `
<p><p><p><p a><p>
<style>
  * {
    background: #FFF;
    color: #8C8C8C;
    * {
      background: #D9D9D9;
      margin: 90px 105px 40px;
      padding: 50px 15px;
      * {
        float: left;
        padding: 10px;
        background: #8C8C8C;
        margin: 10px;
        box-shadow: 0 50px;
        & + [a] {
          background: #CA5348;
          & + * {
            position: fixed;
            padding: 20px 10px;
            top: 60px;
            left: 125px;
            box-shadow: 110px 0;
          }
        }
      }
    }
  }
</style>
`;
