module.exports = `
<p><p>
<style>
  * {
    background: #7C3219;
    * {
      background: #F7CB71;
      margin: 70px 120px;
      p {
        position: fixed;
        background: linear-gradient(90deg, #F7CB71 5vw, 0, #7C3219 70px, 0, #F7CB71 130px, 0, #7C3219 45vw, 0, #F7CB71);
        inset: 60px -5vw;
        border-radius: 9in;
        & + p {
          rotate: 90deg;
        }
      }
    }
  }
</style>
`;
