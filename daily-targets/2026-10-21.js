module.exports = `
<dl><p><p>
<style>
  * {
    background: #E9D97D;
    color: #E9D97D;
    * {
      background: #173C46;
      border: solid 5vh;
      margin: 30px 80px;
      border-radius: 9in;
      padding: 20px;
      * {
        margin: 0;
        * {
          height: 20px;
          border-width: 20px;
          & + p {
            border-radius: 0;
            background: #E9D97D;
            position: fixed;
            top: 45px;
            left: 210px;
            box-shadow: -20px 0 #173C46, 20px 29px;
            height: 0;
            padding: 18px;
          }
        }
      }
    }
  }
</style>
`;
