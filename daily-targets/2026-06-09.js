module.exports = `
<p>
<style>
  * {
    background: #EBF6F0;
    border: solid 30px var(--c, #4A9A86);
    border-radius: 9in;
    margin: 50px 100px;
    * {
      --c: #4C4C6B;
      margin: 0;
      p {
        --c: #EBF6F0;
        rotate: 45deg;
        border-radius: 0;
        position: fixed;
        padding: 30px;
        margin: 65px 0 0 -20px;
      }
    }
  }
</style>
`;
