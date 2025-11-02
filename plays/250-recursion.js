module.exports = `
<dl a><dl a><dl><dl a><dl a><dl>
<style>
  * {
    background: var(--b, #FFF);
    [a] {
      --b: #FFF;
    }
    * {
      margin: 0;
      --b: #000;
      border-radius: 9in;
      position: fixed;
      inset: 10px 60px;
      * {
        inset: 110px 70px;
        * {
          rotate: 90deg;
          * {
            inset: 0 90px;
            * {
              inset: 25px 5px;
              * {
                inset: 0;
                * {
                  inset: 0 5vw;
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
