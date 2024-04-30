module.exports = `
<dl><p></dl><dl><p></dl><dl><p></dl><dl><p>
<style>
  * {
    background: #085328;
    margin: 0;
    dl {
      background: #49C85B;
      position: fixed;
      height: 220px;
      width: 220px;
      top: -200px;
      left: 50px;
      rotate: 45deg;
      border-radius: 50px;
      padding: 40px;
      & + dl {
        top: 200px;
        & + dl {
          top: 0;
          left: -200px;
          & + dl {
            left: 300px;
          }
        }
      }
    }
    p {
      height: 220px;
      width: 220px;
      border-radius: 10px;
    }
  }
</style>
`;
