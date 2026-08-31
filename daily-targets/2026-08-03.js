module.exports = `
<dl><dl><dl><p>
<style>
  * * {
    background: #F7EC7D;
    margin: 125px 90px;
    dl {
      border-radius: 50%;
      background: #415E88;
      height: 50px;
      margin: 0;
      * {
        rotate: 45deg;
        * {
          rotate: 90deg;
          * {
            position: fixed;
            margin: 0;
            rotate: -45deg;
            inset: 5vh;
          }
        }
      }
    }
  }
</style>
`;
