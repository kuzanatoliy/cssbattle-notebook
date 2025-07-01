module.exports = `
<p c r><p r><p><p r><p c r><p c r><p r><p><p r><p c r><p c r><p r><p><p r><p c r>
<style>
  * {
    background: var(--b, #FADE8B);
    * {
      margin: 37.5px;
      [r] {
        border-radius: 9in;
      }
      [c] {
        --b: #D24444;
      }
      p {
        float: left;
        padding: 25px;
        --b: #556D7F;
        margin: 12.5px 7.5px;
      }
    }
  }
</style>
`;
