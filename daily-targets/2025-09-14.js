module.exports = `
<p><p><p>
<style>
  * {
    background: #FFFBDA;
    * {
      background: #D96C7B;
      border-radius: 9in;
      margin: 120px 20px;
      padding: 10px;
      color: #30383F;
      box-shadow: 0 -100px, 0 100px; 
      p {
        background: #30383F;
        margin: 0;
        padding: 20px;
        float: left;
        color: #D96C7B;
        & + p {
          margin-left: 110px;
        }
      }
    }
  }
</style>
`;
