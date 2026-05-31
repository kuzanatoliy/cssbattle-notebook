module.exports = `
<p><p><dl>
<style>
  body {
    background: #EEF8F9;
    margin: 69px 80px;
    p {
      float: left;
      border: solid 20px #A6CE39;
      height: 30px;
      width: 30px;
      border-radius: 9in;
      background: #0088CA;
      & + p {
        margin-left: 100px;
        & + dl {
          position: fixed;
          border: solid 30px #0088CA;
          border-top: 0;
          inset: 25vw 25vw 54px;
        }
      }
    }
  }
</style>
`;
