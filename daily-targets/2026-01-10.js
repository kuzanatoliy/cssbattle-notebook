module.exports = `
<p><p><p><p>
<style>
  * {
    background: #F4DA64;
    * {
      background: #E25C57;
      margin: 120px 170px;
      color: #E25C57;
      * {
        position: fixed;
        inset: 20px 0;
        rotate: 45deg;
        box-shadow: 90px 0, -90px 0;
        & + p {
          rotate: -45deg;
          & + p {
            inset: 15px;
            rotate: 0deg;
            border-radius: 9in;
            & + p {
              rotate: 90deg;
            }
          }
        }
      }
    }
  }
</style>
`;
