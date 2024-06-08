module.exports = `
<dl><p><p>
<style>
  * {
    background: var(--b, #81008F);
    * {
      --b: #DBBEDF;
      margin: 100px 140px;
      border-radius: 50%;
    }
    dl {
      position: fixed;
      inset: 35px -60px;
      border-radius: 5px 5px 30px 30px;
    }
    p {
      --b: #81008F;
      width: 25px;
      height: 30px;
      margin: 12px 82px;
      rotate: -45deg;
      float: left;
    }
    p + p {
      rotate: 45deg;
      margin: 12px -57px;
    }
  }
</style>
`;
