module.exports = `
<dl><p><p></dl><dl><p i><p>
<style>
  * {
    background: var(--b, #3F4869);
    * {
      margin: 60px;
      dl, p {
        height: 90px;
        margin: 0;
        & + dl {
          scale: 1 -1;
        }
        [i] {
          z-index: 1;
          position: relative;
        }
        p {
          --b: #F4DA64;
          width: 180px;
          border-radius: 9in 9in 0 0;
          float: left;
          & + p {
            margin-left: -80px;
            --b: #E25C57;
          }
        }
      }
    }
  }
</style>
`;
