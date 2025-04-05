module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #E8AD6D);
    body {
      --b: #DE6B67;
      margin: 75px 125px;
      border-radius: 9in;
      p {
        margin: 0;
        position: fixed;
        inset: 140px 100px;
        rotate: 45deg;
        & + p {
          rotate: 135deg;
          & + p {
            --b: #E8AD6D;
            inset-inline: 190px;            
          }
        }
      }
    }
  }
</style>
`;
