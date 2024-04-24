module.exports = `
<p>
<style>
  * {
    background: #06487A;
    border: solid 10vh #D5EDFC;
    border-width: var(--w, 80px 40px 40px);
    padding: 32px;
    * {
      --w: 30px;
      padding: 0;
    }
    p {
      --w: 0;
      position: fixed;
      height: 90px;
      width: 40px;
      margin: -160px 70px;
    }
  }
</style>
`;
