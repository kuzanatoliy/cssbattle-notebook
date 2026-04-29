module.exports = `
<p>
<style>
  * {
    background: var(--b, #E3DCD1);
    * {
      border: solid 30px #0D2A58;
      margin: 120px 30px 40px;
      --b: linear-gradient(90deg, #D95F5B 50%, 0, #5CF2F7);
      * {
        position: fixed;
        margin: 0;
        border-bottom: 0;
        inset: 190px 130px 40px;
        border-radius: 9in 9in 0 0;
        --b: #E3DCD1;
      }
    }
  }
</style>
`;
