module.exports = `
<p r><p>
<style>
  * {
    background: #CF6939;
    body {
      border: solid 40px #F9D081;
      margin: 15px 130px;
      border-radius: 9in;
      scale: -1;
      [r] {
        border-radius: 9in 9in 0 0;
      }
      p {
        background: #6D8971;
        height: 30px;
        margin: 0;
        & + p {
          background: #123747;
          height: 80px;
          color: #CF6939;
          box-shadow: 40px 0, -40px 0;
        }
      }
    }
  }
</style>
`;
