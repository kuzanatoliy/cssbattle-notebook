module.exports = `
<p><p><p>
<style>
  * {
    background: #F7CB71;
    * {
      background: #D16161;
      margin: 120px 240px 120px 40px;
      p {
        margin: 0;
        height: 60px;
        rotate: 90deg;
        & + p {
          position: fixed;
          padding: 25px;
          height: 0;
          border-radius: 9in;
          top: 90px;
          left: 310px;
          box-shadow: 0 70px #4D52D0;
          & + p {
            top: 160px;
          }
        }
      }
    }
  }
</style>
`;
