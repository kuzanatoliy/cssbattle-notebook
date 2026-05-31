module.exports = `
<p><p>
<style>
  * {
    background: #9FF0FB;
    * {
      background: #3F8BA6;
      color: #3F8BA6;
      position: fixed;
      inset: 75px 75px 65vh;
      margin: 0;
      * {
        inset: 75px 185px;
        & + * {
          inset: 40px 50vh 40vw;
          border-radius: 9in;
          box-shadow: -30vw 0, 30vw 0, 0 30vw;
        }
      }
    }
  }
</style>
`;
