module.exports = `
<dl><p><p><p><p s><p><p><p></dl><dl></dl><dl></dl><dl>
<style>
  * {
    margin: 0;
    background: #67AED4;
    body {
      scale: -1;
      dl {
        height: 100px;
        background: #FFF;
        margin: 0 -20px;
        p {
          height: 80px;
          width: 40px;
          margin: 0 10px;
          float: left;
        }
        [s] {
          background: #0F2836;
          width: 60px;
        }
        & + dl {
          height: 60px;
          margin: 0 150px;
          & + dl {
            margin: 0 170px;
            & + dl {
              margin: 0 194px;
            }
          }
        }
      }
    }
  }
</style>
`;
