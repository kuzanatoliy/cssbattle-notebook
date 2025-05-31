module.exports = `
<p><p><p><dl>
<style>
  * {
    background: #4F77FF;
    * {
      margin: 60px 130px;
      * {
        background: #FFF;
      }
      dl {
        position: fixed;
        inset: 50px 50px 60px;
        border: solid 10px #4F77FF;
        border-top: none;
      }
      p {
        margin: 10px 0;
        height: 20px;
        & + p + p {
          margin: 10px;
          height: 120px;
          border-radius: 9in;
        }
      }
    }
  }
</style>
`;
