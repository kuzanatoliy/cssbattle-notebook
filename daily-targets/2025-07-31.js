module.exports = `
<p><p>
<style>
  * {
    background: #23384B;
    * {
      background: #F0CD48;
      margin: 125px 110px;
      p {
        border-radius: 9in;
        position: fixed;
        inset: -35vh 130px 0 0;
        & + p {
          inset: -35vh 0 -35vh 130px;
        }
      }
    }
  }
</style>
`;
