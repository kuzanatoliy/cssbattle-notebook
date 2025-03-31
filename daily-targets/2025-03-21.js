module.exports = `
<p c><p><p><p>
<style>
  * {
    background: var(--b, #A9FFFC);
    * {
      margin: 60px 50px;
      [c] {
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
      }
      p {
        margin: 0;
        --b: #1A353C;
        height: 120px;
        & + p {
          --b: #31798F;
          float: left;
          width: 40px;
          margin: 0 30px;
        }
      }
    }
  }
</style>
`;
