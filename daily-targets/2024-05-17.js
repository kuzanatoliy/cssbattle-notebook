module.exports = `
<p><dl><p><dl><p><dl><p><dl><p><dl><p><dl><p>
<style>
  * {
    margin: 0;
    body, p {
      background: #F59426;
      & > p {
        position: fixed;
        z-index: 1;
        inset: 30vw 170px;
        border-radius: 9in;
      }
    }
    dl {
      width: 50px;
      height: 120px;
      margin: 30px 175px;
      transform-origin: 50% 100%;
      & > dl {
        margin: -120px 0;
        rotate: 60deg;
      }
      & > p {
        background: #FFF;
        height: 120px;
        clip-path: polygon(50% 0, 100% 33%, 50% 100%, 0 33%);
      }
    }
  }
</style>
`;
