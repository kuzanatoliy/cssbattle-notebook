module.exports = `
<dl><dl><dl>
<style>
  * {
    background: var(--b, #49C85B);
    margin: 0;
    body {
      margin: 35px 85px;
      dl {
        --b: #2F9947;
        height: calc(100% - 60px);
        border-radius: 9in;
        padding: 30px;
        dl {
          --b: #1F7D3B;
          dl {
            --b: #085328;
          }
        }
      }
    }
  }
</style>
`;
