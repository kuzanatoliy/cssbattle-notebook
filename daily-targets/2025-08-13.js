module.exports = `
<p><p>
<style>
  * {
    background: #5A9F48;
    * {
      border: solid 5vw #23384B;
      margin: 110px 90px 30px;
      border-radius: 30px;
      p {
        position: fixed;
        inset: -80px 30px 35vw;
        border-radius: 9in 9in 0 0;
        & + p {
          border-radius: 0;
          inset: 60px 70px 0px;
          border-bottom: none;
        }
      }
    }
  }
</style>
`;
