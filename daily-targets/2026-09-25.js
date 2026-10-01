module.exports = `
<p><p><p>
<style>
  * {
    background: #FFF8E1;
    * {
      background: #9676CF;
      margin: 60px 130px 40px;
      border-radius: 0 0 30px 30px;
      * {
        height: 20px;
        margin: 0 35px;
        position: relative;
        scale: -1;
        top: -20px;
        & + p {
          margin: 0 -15px;
          border-radius: 9in;
          background: #7454B4;
          color: #7454B4;
          & + p {
            margin: 30px 60px;
            height: 120px;
            box-shadow: 40px 0, -40px 0;
          }
        }
      }
    }
  }
</style>
`;
