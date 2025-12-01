module.exports = `
<p><p><p>
<style>
  * {
    background: #FEF7F5;
    * {
      border: solid #555FD9;
      border-width: 20px 18px 20px 0;
      margin: 110px 62px 110px 80px;
      p {
        padding: 10px 118px;
        position: fixed;
        top: 60px;
        left: 0;
        border-width: 20px 0 20px 20px;
        -webkit-box-reflect: above var(--r, 40px);
        & + p {
          top: 100px;
          scale: -1 1;
          padding: 10px 135px;
          --r: 30vw;
          & + p {
            top: 120px;
            border-width: 0 0 20px;
            left: -50px;
            --r: 40vw;
          }
        }
      }
    }
  }
</style>
`;
