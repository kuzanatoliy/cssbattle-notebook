module.exports = `
<p><dl><p>
<style>
  * {
    background: #A4C5BD;
    * {
      background: #D96C7B;
      margin: 80px 105px;
      border-radius: var(--r, 50px 50px 0 0);
      p {
        background: #8D424D;
        height: 100%;
        width: 100px;
        margin: 0;
        & + dl {
          position: fixed;
          margin: 0 130px;
          height: 80px;
          width: 30px;
          --r: none;
          p {
            width: 10px;
          }
        }
      }
    }
  }
</style>
`;
