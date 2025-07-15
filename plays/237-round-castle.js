module.exports = `
<p><p>
<style>
  * {
    background: #3F4869;
    body {
      background: linear-gradient(90deg, #E25C57 50%, 0, #F4DA64);
      margin: 43px 90px;
      border-radius: 9in 9in 0 0;
      p {
        float: left;
        padding: 20px;
        margin: 174px 0 0 90px;
        & + p {
          background: #E25C57;
          margin: 110px 0 0 35px;
          width: 15px;
          height: 64px;
          box-shadow: -165px 0 #F4DA64;
        }
      }
    }
  }
</style>
`;
