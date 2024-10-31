module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #3F4869);
    * {
      margin: 35px 130px;
      p {
        --b: #61A74E;
        height: 140px;
        margin: 0;
      }
      p:nth-child(odd) {
        border-radius: 9in;
      }
      p + p {
        margin: -70px 0 0 0;
      }
      p:nth-child(even) {
        --b: #3F4869;
        width: 70px;
        height: 90px;
      }
    }
  }
</style>
`;
