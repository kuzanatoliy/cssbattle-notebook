module.exports = `
<p><p><dl><p><p>
<style>
  * {
    background: var(--b, #F0CD48);
    border-radius: var(--r, 5vw);
    body {
      --b: #243D83;
    }
    * {
      margin: 0;
      position: fixed;
      inset: 90px 25vw;
      border-width: 30px 50px;
      p {
        inset: 40vh 80px;
        rotate: 30deg;
        & + p {
          rotate: -30deg;
          & + * {
            --b: #6592CF;
            --r: 10px;
            inset: 40vh 50vh;
            border-radius: 10px;
            p {
              inset: 45vh 35vw;
            }
          }
        }
      }
    }
  }
</style>
`;
