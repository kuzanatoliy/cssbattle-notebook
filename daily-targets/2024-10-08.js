module.exports = `
<p><p><p><p><p><p>
<style>
  * {
    background: var(--b, #8AB8B6);
    * {
      margin: 120px 20px;
      p {
        margin: 0;
        height: 60px;
        width: 60px;
        float: left;
        border-radius: 9in 0 0 9in;
        --b: #F3EAD2;
        &:nth-child(even) {
          --b: #D96C7B;
          border-radius: 9in;
        }
      }
    }
  }
</style>
`;
