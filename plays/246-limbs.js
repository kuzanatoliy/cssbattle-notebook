module.exports = `
<p><p><p><p>
<style>
  * {
    background: #333;
    * {
      margin: 35px 65px 29px 43px;
      p {
        background: #EEEEEE;
        height: 128px;
        margin: 0;
        border-radius: var(--r, 0 0 68q 68q);
        & + p {
          scale: -1;
          margin: -20px 0;
          & + p {
            width: 64px;
            --r: 0;
            position: fixed;
            inset: -56q 113q 0;
            border: solid #333;
            border-width: 47q 53q;
            & + p {
              top: 194q;
            }
          }
        }
      }
    }
  }
</style>
`;
