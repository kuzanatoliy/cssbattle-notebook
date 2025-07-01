module.exports = `
<p><p><p><p><p><p><p><p>
<style>
  * {
    background: #5AA4B7;
    * {
      margin: 50px 100px;
      * {
        position: fixed;
        background: #000;
        inset: 5vw 0 40vw;
        border-radius: 9in;
        & + * {
          inset: 40vw 0 5vw;
          & + * {
            inset: 0 5vw 0 40vw;
            & + * {
              inset: 0 40vw 0 5vw;
              & + * {
                inset: 90px 60px;
                & + * {
                  rotate: 45deg;
                  & + * {
                    rotate: 90deg;
                    & + * {
                      rotate: 135deg;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
`;
