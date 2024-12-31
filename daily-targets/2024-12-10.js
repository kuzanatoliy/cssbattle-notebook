module.exports = `
<dl><p></dl><dl>
<style>
  * {
    background: var(--b, #FADE8B);
    * {
      margin: 60px 34px;
      color:  #C3463D;
      dl {
        margin: 0;
        float: left;
        --b: #5DBCF9;
        height: 180px;
        width: 140px;
        box-shadow: 48px -84px 0 -48px;
        & + dl {
          margin-left: 52px;
          scale: -1;
        }
        p {
          position: fixed;
          height: 100px;
          width: 96px;
          --b: #C3463D;
          top: -36px;
          left: 140px;
          z-index: 1;
          box-shadow: -44px 152px;
        }
      }
    }
  }
</style>
`;
