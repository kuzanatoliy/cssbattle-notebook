module.exports = `
<p><p>
<style>
  * {
    margin: 15px 0;
    background: #B46C31;
    p {
      background: #331D1D;
      height: 20px;
      & + p {
        position: relative;
        background: #FEF8BB;
        margin: 0 125px;
        top: -35px;
        height: 240px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%);
      }
    }
  }
</style>
`;
