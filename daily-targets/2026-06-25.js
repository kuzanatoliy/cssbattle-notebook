module.exports = `
<p><p><p><p>
<style>
  * * {
    background: #FFF;
    margin: 50px 100px;
    p {
      margin: 0 10px;
      position: fixed;
      padding: 20px 10px;
      border: solid 40px #328FC1;
      border-right: 0;
      border-radius: 9in 0 0 9in;
      transform-origin: 149% 83%;
      & + p {
        rotate: 90deg;
        & + p {
          rotate: 180deg;
          & + p {
            rotate: 270deg;
          }
        }
      }
    }
  }
</style>
`;
