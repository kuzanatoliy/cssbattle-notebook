module.exports = `
<p><p a><p a><p>
<style>
  * {
    background: #E0E7FF;
    * {
      margin: 0 110px;
      p {
        background: #4F77FF;
        height: 75px;
        margin: 0 75px 30px;
      }
      [a] + [a] {
        scale: -1;
      }
      [a] {
        margin-inline: 0;
        height: 30px;
        clip-path: polygon(30px 0, 50vh 0, 100% 100%, 0 100%);
      }
    }
  }
</style>
`;
