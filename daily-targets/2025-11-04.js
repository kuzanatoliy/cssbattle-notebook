module.exports = `
<p><p><p><dl>
<style>
  * {
    background: #00D47E;
    * {
      margin: 100px 5px;
      p {
        float: left;
        border: solid 25px;
        margin: 0 15px;
        padding: 25px;
        border-radius: 9in;
        & + dl {
          background: #000;
          position: fixed;
          inset: 42px 175px;
          box-shadow: 50vh 0, -50vh 0;
        }
      }
    }
  }
</style>
`;
