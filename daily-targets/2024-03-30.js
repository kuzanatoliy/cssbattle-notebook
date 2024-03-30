module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #DBBEDF);
    * {
      --b: #81008F;
      margin: 90px 75px;
    }
    p {
      margin: 0;
      float: left;
      height: 120px;
      width: 80px;
      --b: repeating-linear-gradient(#81008F, #81008F 20px, 0, #DBBEDF 40px);
      box-shadow: 0 100px #81008F;
    }
    p + p {
      margin-left: 90px;
      scale: -1;
    }
  }
</style>
`;
