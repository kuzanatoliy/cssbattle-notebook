module.exports = `
<p><p><p><p><dl>
<style>
  * {
    background: #555FD9;
    position: fixed;
    margin: 0;
    p {
      background: #EFBB74;
      padding: 50px;
      border-radius: 9in;
      top: 10px;
      left: 150px;
      transform-origin: 50% 140px;
      & + p {
        rotate: 90deg;
        & + p {
          rotate: 180deg;
          & + p {
            rotate: 270deg;
            & + dl {
              background: none;
              border: solid 5vw #555FD9;
              inset: 50px 25vw;
            }
          }
        }
      }
    }
  }
</style>
`;
