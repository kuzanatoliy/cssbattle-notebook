module.exports = `
<p><p>
<style>
  html {
    background: #152844;
    border: solid 30px #A34F46;
    margin: 0 130px 135px;
    * {
      margin: 0;
      position: fixed;
      background: #A34F46;
      inset: 45vh 5vw;
      p {
        inset: 50vh 185px 0;
        & + p {
          background: #FFF;
          inset: 55vh 350px 75px 5vw;
          -webkit-box-reflect: right 75vw;
        }
      }
    }
  }
</style>
`;
