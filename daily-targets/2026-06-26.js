module.exports = `
<p><p>
<style>
  * {
    background: #D8F581;
    * {
      background: #222;
      margin: 40px 90px;
      p {
        margin: 0;
        border: solid #D8F581;
        border-width: 0 55px 55px 0;
        height: 55px;
        width: 55px;
        & + p {
          rotate: 180deg;
          margin: 0 110px;
        }
      }
    }
  }
</style>
`;
