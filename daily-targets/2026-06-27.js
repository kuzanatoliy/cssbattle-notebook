module.exports = `
<p><p>
<style>
  * {
    background: #5DBCF9;
    * {
      background: #E3E46F;
      margin: 95px 130px;
      p {
        position: fixed;
        border-radius: 9in;
        inset: 5vh -45px;
        rotate: 45deg;
        & + p {
          rotate: -45deg;
        }
      }
    }
  }
</style>
`;
