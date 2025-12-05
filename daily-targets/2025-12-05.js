module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #32955E);
    * {
      --b: #FFF;
      margin: 160px 100px 0;
      border-radius: var(--r, 65px 134px 0 0);
      padding: 60px 0 0;
      p {
        margin: 0 130px;
        --b: #000;
        padding: 10px;
        --r: 9in;
        & + p {
          margin: 10px 150px 0;
          padding: 20px 30px;
          --r: 9in 0 0 9in;
          --b: #32955E;
        }
      }
    }
  }
</style>
`;
