module.exports = `
<dl><p><p>
<style>
  * {
    background: var(--b, #FCDDEB);
    body {
      margin: 60px 130px;
    }
    dl {
      --b: #D5007F;
      height: 100%;
      border-radius: 9in;
      clip-path: polygon(0 0, 100% 0, 100% 61%, 50% 100%, 0 61%);
      overflow: hidden;
    }
    p {
      --b: #F5A9CD;
      margin: 0 50px;
      height: 70px;
    }
    p + p {
      --b: #EF5CA5;
      margin: 0;
      height: 90px;
      clip-path: polygon(0 0, 100% 0, 100% 22%, 50% 100%, 0 22%);
    }
  }
</style>
`;
