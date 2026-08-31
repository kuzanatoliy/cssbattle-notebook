module.exports = `
<dl><p><p>
<style>
  * {
    background: #3A2568;
    body {
      background: #F9DDC6;
      border-radius: 9in;
      margin: 20px 120px;
      padding: 80px 0 0;
      * {
        padding: 10px 0;
        height: 80px;
        * {
          float: left;
          margin: 0;
          padding: 0 10px;
          background: #9D92C8;
          -webkit-box-reflect: right 80px;
          & + * {
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>
`;
