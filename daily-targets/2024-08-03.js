module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #232323);
    * {
      margin: 75px;
      --b: #F2F2F2;
    }
    p + p {
      --b: #DF7065;
      scale: -1 1;
    }
    p {
      margin: 0;
      position: fixed;
      --b: #78B4F3;
      width: 250px;
      height: 150px;
      clip-path: polygon(100% 0, 100% 100%, 0 100%);
    }
  }
</style>
`;
