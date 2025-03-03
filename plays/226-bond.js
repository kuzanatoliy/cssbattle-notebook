module.exports = `
<p><dl><p><p><p>
<style>
  * {
    background: #2F434E;
    * {
      margin: 87px 70px;
      p {
        background: #E25C57;
        height: 80px;
        margin: 0 50px;
        border-radius: 9in 9in 0 0;
        & + dl {
          p {
            border-radius: 9in;
            height: 20px;
            width: 20px;
            float: left;
            margin: 0 30px;
          }
          background: #F3AC3C;
          height: 14px;
          margin: 0;
          padding: 16px 10px;
          clip-path: polygon(50px 0, 210px 0, 100% 100%, 0 100%);
        }
      }
    }
  }
</style>
`;
