module.exports = `
<p><dl>
<style>
  * {
    background: #FFEFF7;
    body {
      background: #DEB467;
      margin: 70px 145px 70px 0;
      clip-path: polygon(0 0, 57% 0, 100% 50%, 57% 100%, 0 100%);
      p {
        height: 160px;
        width: 145px;
        background: #226AA9;
        & + dl {
          height: 92px;
          width: 92px;
          border-radius: 9in;
          position: fixed;
          background: #000;
          top: 88px;
          left: 205px;
        }
      }
    }
  }
</style>
`;
