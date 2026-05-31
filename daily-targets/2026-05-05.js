module.exports = `
<p><p>
<style>
  * {
    background: #C0D6E7;
    * {
      background: #3F4869;
      margin: 50px 100px;
      p {
        margin: 0;
        float: left;
        padding: 50px;
        color: #E25C57;
        box-shadow: 25vw 0, 0 25vw;
        & + p {
          padding: 35px;
          margin: 15px;
          border-radius: 9in;
          box-shadow: -25vw 0, 0 25vw, -25vw 25vw #3F4869;
        }
      }
    }
  }
</style>
`;
