module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  * {
    background: var(--b, #4F77FF);
    margin: 0;
    body {
      margin: 20px;
      p {
        float: left;
        height: 140px;
        --b: #FFF;
        width: 90px;
      }
      p + p {
        --b: #4F77FF;
        border: solid 5vw #fff;
        border-top: none;
        margin-left: 20px;
        height: 100px;
        width: 50px;
      }
      dl {
        --b: none;
        height: 140px;
        & + dl {
          position: relative;
          scale: -1;
          top: -20px;
        }
      }
    }
  }
</style>
`;
