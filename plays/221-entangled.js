module.exports = `
<p r><p><p><p r>
<style>
  * {
    background: var(--b, #3F4869);
    * {
      margin: 60px;
      [r] {
        --b: #F4DA64;
      }
      p {
        height: 90px;
        width: 180px;
        float: left;
        margin: 0;
        border-radius: 9in 9in 0 0;
        & + p {
          --b: #E25C57;
          margin: 0 0 0 -80px;
          & + p {
            float: right;
            scale: 1 -1;
          }
        }
      }
    }
  }
</style>
`;
