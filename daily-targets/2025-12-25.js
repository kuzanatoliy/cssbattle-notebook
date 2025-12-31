module.exports = `
<p y><p g><p><p g><p>
<style>
  * {
    background: var(--b, #11092D);
    * {
      margin: 60px 130px;
      [g] {
        --b: #1BBC63;
      }
      [y] {
        --b: #FFCA00;
      }
      p {
        height: 20px;
        --b: #0F6B38;
        margin: 20px 60px;
        & + p {
          margin: 20px 45px;
          & + p {
            margin: 20px 30px;
            & + p {
              margin: 20px 15px;
              & + p {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
