module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #FEFAED);
    * {
      --b: #F9D9BF;
      margin: 60px 80px;
      p {
        --b: #D4A29F;
        margin: 0;
        width: 60px;
        height: 90px;
        & + p {
          margin: 0 180px;
        }
      }
    }
  }
</style>
`;
