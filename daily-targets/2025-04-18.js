module.exports = `
<dl><dl>
<style>
  * {
    background: var(--b, #2D3464);
    * {
      --b: #646DAB;
      margin: 70px 200px 70px 120px;
      border-radius: 9in 0 0 9in;
      padding: 20px 0 20px 20px;
      * {
        margin: 0;
        height: calc(100% - 40px);
        --b: #D9D9D9;
        * {
          --b: #2D3464;
        }
      }
    }
  }
</style>
`;
