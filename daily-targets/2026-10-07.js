module.exports = `
<p><p>
<style>
  * {
    background: #476573;
    body {
      background: #B8D982;
      margin: 50px;
      * {
        border: solid var(--b, 30px) #B8D982;
        position: fixed;
        inset: 4px 70px;
        border-radius: 9in;
        & + p {
          --b: 20px;
          inset: 114px 50px;
        }
      }
    }
  }
</style>
`;
