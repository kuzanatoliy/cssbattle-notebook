module.exports = `
<p><p><p>
<style>
  * {
    background: #81008F;
    body {
      margin: 50px 150px;
    }
    p {
      border: solid 30px #AD6CB6;
      height: 65px;
      border-color: var(--c, #AD6CB6 #81008F);
    }
    p + p {
      background: #DBBEDF;
      margin: -141px 0;
      --c: #81008F #DBBEDF;
      border-bottom: 0;
      height: 75px;
      & + p {
        margin: 161px 0;
        --c: #DBBEDF;
        border-width: 45px 35px;
        background: #81008F;
        height: 30px;
      }
    }
  }
</style>
`;
