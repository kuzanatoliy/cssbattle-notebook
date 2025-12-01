module.exports = `
<p><p a><p a><p>
<style>
  * {
    background: #EED9D9;
    * {
      margin: 75px 125px;
      p {
        background: #668884;
        float: left;
        margin: 0 50px;
        padding: 25px;
        border-radius: 9in 0 0 9in;
      }
      [a] {
        margin: 0;
        background: #C67455;
        & + [a] {
          margin-left: 50px;
          scale: -1;
        }
      }
    }
  }
</style>
`;
