module.exports = `
<p><dl><div><div><div><dl>
<style>
  * {
    background: #94B31F;
    margin: 15px 40px;
    p {
      position: fixed;
      inset: 45px 70px;
      z-index: 1;
      border-radius: 9in;
    }
    dl {
      height: 240px;
      background: #FFF;
      margin: 0;
      border-radius: 9in;
      overflow: hidden;
      * {
        background: #5F5F1E;
        height: 240px;
        margin: 0 105px;
        * {
          margin: 0;
          rotate: -45deg;
          * {
            rotate: 90deg;
          }
        }
      }
    }
  }
</style>
`;
