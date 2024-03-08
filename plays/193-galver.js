module.exports = `
<p><p><p><p><dl>
<style>
  * {
    background: #FCDDEB;
    margin: 0;
    border-radius: 9in;
    position: fixed;
  }
  * * {
    background: #8B0051;
  }
  dl {
    height: 70px;
    width: 70px;
    inset: 115px 165px;
    outline: double 45px #8B0051;
    box-shadow: inset 0 0 0 5vh #F180B6;
  }
  p {
    height: 115px;
    width: 30px;
    top: 35px;
    left: 185px;
    clip-path: polygon(0 0, 0 5vh, 50% 100%, 100% 5vh, 100% 0);
    transform-origin: 50% 100%;
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
</style>
`;
