module.exports = `
<p><p><p>
<style>
  html {
    background: #B7D7CD;
    margin: 35px 124px 0 136px;
    border-top: solid 30px #411C56;
    body {
      border: solid 30px #411C56;
      border-left: none;
      margin: 13px 0 102px 80px;
      border-radius: 0 9in 9in 0;
      p {
        position: fixed;
        margin: 0;
        background: #C06C88;
        top: 35px;
        left: 136px;
        padding: 20px 40px;
        & + p {
          top: 75px;
          left: 166px;
          padding: 80px 25px;
          & + p {
            top: 235px;
            left: 146px;
            padding: 15px 45px;
          }
        }
      }
    }
  }
</style>
`;
