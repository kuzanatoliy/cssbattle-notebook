module.exports = `
<dl c><p><p p><p></dl><dl>
<style>
  * {
    background: var(--b, #FFF);
    * {
      margin: 39px 80px;
      [c] {
        clip-path: polygon(25vw 0, 35vw 0, 100% 100%, 0 100%);
      }
      dl {
        --b: #1A353C;
        height: 97px;
        padding: 14px;
        margin: 0;
        & + dl {
          margin: 0 20px;
          height: 140px;
        }
        [p] {
          background: #E0B673;
        }
        p {
          --b: #FFF;
          height: 14px;
          margin: 0 86px;
          & + p {
            height: 100px;
            & + p {
              height: 50px;
              width: 100px;
              border-radius: 9in 9in 0 0;
              position: relative;
              top: -53px;
              left: -30px;
            }
          }
        }
      }
    }
  }
</style>
`;
