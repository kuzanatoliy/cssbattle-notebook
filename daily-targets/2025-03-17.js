module.exports = `
<dl><p><p>
<style>
  * {
    background: #F1DDF5;
    body, dl {
      background: #000;
      margin: 26px 160px 194px;
      border-radius: 9in;
      border: solid 25px #EAC049;
      dl {
        margin: -25px;
        border-bottom: none;
        border-radius: 9in 9in 0 0;
        height: 16px;
        border-color: #65A3C5;
        p {
          position: fixed;
          height: 99px;
          width: 25px;
          margin: 16px -25px;
          background: linear-gradient(#000 25px, 0, #65A3C5);
          scale: -1;
          & + p {
            margin: 16px 30px;
            height: 199px;
          }
        }
      }
    }
  }
</style>
`;
