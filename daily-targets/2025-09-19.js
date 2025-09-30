module.exports = `
<p><p>
<style>
  html {
    color: #3E4071;
    background: #EDDF5A;
    * {
      margin: 30px 60px 70px;
      box-shadow: 0 40px;
      p {
        float: left;
        margin: 0;
        padding: 70px 60px;
        box-shadow: 40px 0;
        & + p {
          rotate: 45deg;
          position: fixed;
          left: 130px;
          top: 52px;
          padding: 70px;
          box-shadow: inset -40px -40px;
        }
      }
    }
  }
</style>
`;
