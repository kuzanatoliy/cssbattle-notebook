module.exports = `
<dl><dl><dl></dl></dl></dl><dl><dl><dl>
<style>
  * {
    background: var(--b, #0B2429);
    margin: 0;
    dl {
      --b: #F3AC3C;
      height: 100px;
      width: 150px;
      height: 150px;
      float: left;
      margin: 120px 0 0;
      border-radius: 25vw 0;
      padding: 30px 30px 0 0;
      & + dl {
        margin: 0 0 0 40px;
        scale: -1;
      }
      dl {
        margin: 0;
        --b: #998235;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        dl {
          --b: #1A4341;
        }
      }
    }
  }
</style>
`;
