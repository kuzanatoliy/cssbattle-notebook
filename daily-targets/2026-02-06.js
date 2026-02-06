module.exports = `
<p><p>
<style>
  * {
    background: #37B4BD;
    * {
      background: #FAE29E;
      margin: 220px 160px 0;
      * {
        height: 40px;
        margin: 0 20px;
        position: relative;
        top: -80px;
        rotate: -30deg;
        & + * {
          height: 20px;
          margin: 0 30px;
          top: -180px;
          rotate: 30deg;
        }
      }
    }
  }
</style>
`;
