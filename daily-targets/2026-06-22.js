module.exports = `
<p a><p><p a><p a>
<style>
  * * {
    [a] {
      border-radius: 5vw;
    }
    background: #38506F;
    margin: 55px 110px;
    * {
      background: #F0CD48;
      padding: 60px;
      margin: 10px;
      & + p {
        padding: 10px;
        & + p {
          float: left;
          margin: 0 0 0 40px;
          padding: 15px;
        }
      }
    }
  }
</style>
`;
