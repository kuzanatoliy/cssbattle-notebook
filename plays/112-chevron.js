module.exports = `
<p><p><p>
<style>
  * {
    background: #6592CF;
  }
  p {
    position: fixed;
    margin: 0;
    background: #293D7E;
    inset: 150px 75px 50px;
    clip-path: polygon(0 0, 15% 0, 50% 70%, 85% 0, 100% 0, 50% 100%);
    height: 100px;
    & + p {
      top: 100px;
      & + p {
        top: 50px;
      }
    }
  }
</style>
`;
