module.exports = `
<dl><p><p>
<style>
  * {
    background: #D95F5B;
    body, dl {
      border-radius: 9in;
    }
    body, p {
      background: #282828;
    }
    body {
      margin: 40px 170px;
      padding: 80px 0 0;
      dl {
        height: 50px;
        outline: solid 5vw #282828;
        padding: 5px;
        p {
          margin: 0 22px;
          height: 10px;
          -webkit-box-reflect: var(--d, below) 30px;
          & + p {
            margin: 12px 40px 0 0;
            height: 6px;
            --d: right;
          }
        }
      }
    }
  }
</style>
`;
