module.exports = `
<style>
  * {
    background: #FADE8B;
    * {
      margin: 70px 100px;
      p {
        margin: 0;
        float: left;
        background: #D2495C;
        padding: 30px 50px;
        border-radius: 9in 9in 0 0;
        & + p + p {
          padding: 50px 100px;
          scale: -1;
          & + p {
            background: #F28997;
            position: fixed;
            border-radius: 9in;
            padding: 9px;
            left: 274px;
            top: 105px;
            box-shadow: 20px 21px 0 4px #F28997;
          }
        }
      }
    }
  }
</style>
`;
