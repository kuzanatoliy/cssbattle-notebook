module.exports = `
<p><p><p>
<style>
  * {
    background: #BE3184;
    margin: 0 40px;
    p {
      height: 300px;
      float: left;
      width: 40px;
      background: linear-gradient(#611B3F var(--t, 20vw), 0, #BE3184 var(--b, 55vw), 0, #611B3F);
      margin: 0 20px;
    }
    p + p {
      --t: 30vw;
      --b: 45vw;
    }
    p + p + p {
      --t: 50%;
      --b: 50%;
    }
  }
</style>
`;
