module.exports = `
<dl><p><dl></dl></dl><dl><p><dl><p>
<style>
  * {
    margin: 0;
    dl {
      float: left;
      position: relative;
      background: #D24444;
      height: 300px;
      width: 200px;
      p {
        background: #FFF;
        padding: 40px;
        position: absolute;
        border-radius: 9in;
        top: 110px;
        left: 30px;
      }
      dl {
        background: #394257;
        height: 150px;
      }
    }
    & + dl {
      background: #FADE8B;
      p {
        left: 90px;
      }
      dl {
        background: #48BF7D;
        p {
          left: -40px;
        }
      }
    }
  }
</style>
`;
