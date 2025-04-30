module.exports = `
<dl><p s><p></dl><dl><p s><p>
<style>
  * {
    background: #4C455B;
    * {
      margin: 30px 0;
      [s] {
        box-shadow: inset -30px 30px 0 30px var(--b);
      }
      dl {
        height: 120px;
        margin: 0;
        --b: #D96C7B;
        p {
          padding: 60px;
          margin: 0;
          float: left;
          & + p {
            background: var(--b);
            margin: 40px 10px 0 0;
            padding: 40px 80px;
            border-radius: 9in 9in 0 0;
          }
        }
        & + dl {
          --b: #8AB8B6;
          scale: -1;
        }
      }
    }
  }
</style>
`;
