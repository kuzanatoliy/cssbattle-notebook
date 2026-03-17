module.exports = `
<p><p><p>
<style>
  * {
    background: #3A2568;
    body {
      border: solid 5vw #9D92C8;
      border-top: 0;
      margin: 50px 90px 140px;
      height: 90px;
      -webkit-box-reflect: below -5vw;
      p {
        position: relative;
        height: 20px;
        margin: 0 40px;
        top: 90px;
        & + p {
          background: #9D92C8;
          height: 100px;
          border-radius: 9in;
          top: -25px;
          & + p {
            top: -15px;
          }
        }
      }
    }
  }
</style>
`;
