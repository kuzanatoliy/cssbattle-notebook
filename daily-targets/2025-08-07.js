module.exports = `
<dl><p></dl><dl><p><p></dl><dl><p><p></dl><dl s><p>
<style>
  * {
    background: #FFF;
    * {
      background: #F88889;
      margin: -10px;
      color: #FFF;
      [s] {
        scale: -1;
      }
      dl {
        overflow: hidden;
        position: relative;
        margin: 10px;
        outline: solid 5vw;
        float: left;
        padding: 70px 95px;
        p {
          position: absolute;
          border-radius: 9in;
          padding: 15px;
          border: solid 5vw;
          top: 45px;
          left: 154px;
          & + p {
            left: -14px;
          }
        }
      }
    }
  }
</style>
`;
