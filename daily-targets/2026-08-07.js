module.exports = `
<p><p><p><p>
<style>
  * {
    background: #A82973;
    * {
      background: #EA9A52;
      margin: 140px 60px;
      p {
        float: left;
        padding: 30px 26px;
        transform: skewX(15deg);
        margin: -20px -6px;
        & + p {
          margin-left: 34px;
        }
      }
    }
  }
</style>
`;
