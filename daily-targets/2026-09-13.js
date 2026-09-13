module.exports = `
<p><p>
<style>
  * {
    background: #7253BC;
    border: solid #391B1B;
    border-width: var(--w, 0 0 0 5vw);
    margin: 35px 130px;
    * {
      --w: 5vw;
      background: #FFF;
      margin: 10px 60px 120px -20px;
      * {
        position: fixed;
        top: 55px;
        left: 210px;
        padding: 30px 20px;
        & + p {
          --w: 0;
          padding: 20px;
          top: 75px;
        }
      }
    }
  }
</style>
`;
