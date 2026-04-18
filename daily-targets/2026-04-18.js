module.exports = `
<p><p>
<style>
  * {
    background: #E5E5E3;
    * {
      background: #E75044;
      margin: 225px 130px 25px;
      * {
        position: fixed;
        inset: -25vw -60px 25vw;
        border-radius: 9in 9in 0 0;
        & + * {
          inset: -50vw 30px 50px;
          box-shadow: -30px 0 #E5E5E3;
        }
      }
    }
  }
</style>
`;
