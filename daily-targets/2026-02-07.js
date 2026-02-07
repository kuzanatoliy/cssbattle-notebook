module.exports = `
<p><p><p>
<style>
  * {
    background: #8877DC;
    border: solid #192865;
    border-width: 0 30px;
    margin: 50px 25px;
    * {
      border-width: 60px 0 0;
      margin: 0 20px;
      p {
        background: #FFE08A;
        border: none;
        margin: 0;
        float: left;
        padding: 15px 30px;
        border-radius: 0 0 9in 9in;
        & + p {
          margin-left: 35px;
        }
      }
    }
  }
</style>
`;
