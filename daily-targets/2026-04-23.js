module.exports = `
<p>
<style>
  * {
    background: var(--b, #4C4C6B);
    * {
      --b: #4A9A86;
      border-radius: 9in;
      margin: 100px 150px;
      color: #FAE29E;
      box-shadow: 35vw 0, -35vw 0;
      padding: 30px;
      * {
        margin: 0;
        padding: 20px;
        --b: #FAE29E;
        color: #4A9A86;
      }
    }
  }
</style>
`;
