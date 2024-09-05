module.exports = `
<p><p><p><p><dl>
<style>
  * {
    background: #9076D8;
    * {
      margin: 50px 80px;
      dl {
        position: fixed;
        height: 13px;
        width: 240px;
        margin: 94px 0;
      }
      p {
        background: #F3EAD2;
        float: left;
        width: 44px;
        height: 200px;
        margin: 0 8px;
        & + p {
          margin-top: 30px;
          height: 140px;
          & + p {
            margin-top: 51px;
            height: 98px;
            & + p {
              margin-top: 66px;
              height: 68px;
            }
          }
        }
      }
    }
  }
</style>
`;
