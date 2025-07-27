module.exports = `
<p><p><dl><p>
<style>
  * {
    background: #DC9DA6;
    position: fixed;
    p {
      background: #6E3C3C;
      inset: 124px 100px;
      & + p {
        rotate: 90deg;
        & + dl {
          inset: 85px 150px;
          border-radius: 9in;
          border: solid 30px #6E3C3C;
          p {
            rotate: -45deg;
          }
        }
      }
    }
  }
</style>
`;
