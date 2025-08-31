module.exports = `
<dl><dl><p><p>
<style>
  * {
    background: #62E383;
    * {
      position: relative;
      overflow: hidden;
      margin: 60px 100px;
      dl {
        margin: 0;
        height: 180px;
        overflow: hidden;
        dl {
          margin: 0 10px;
          color: #3B240C;
          background: #3B240C;
          border-radius: 9in;
          box-shadow: 70px 0, -70px 0;
          p {
            position: fixed;
            inset: 100px 60px 70px;
            & + p {
              inset: 60px 120px 100px 60px;
              border-radius: 9in;
              -webkit-box-reflect: right 40px;
            }
          }
        }
      }
    }
  }
</style>
`;
