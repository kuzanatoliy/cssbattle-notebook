module.exports = `
<dl><p a><p><p a>
<style>
  * {
    background: #E8AD6D;
    body {
      background: #3B240C;
      margin: 90px 60px;
      scale: -1;
      dl {
        height: 70px;
        [a] {
          border-radius: 0 0 9in 9in;
          padding-inline: 20px;
        }
        p {
          margin: 0;
          float: left;
          border: solid 30px #3B240C;
          border-top: none;
          padding-block: 10px;
          & + p {
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
`;
