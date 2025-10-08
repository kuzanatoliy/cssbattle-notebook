module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #E3516E);
    body {
      margin: 50px 100px;
      clip-path: circle(100px at 100px 100px);
      p {
        --b: #51B5A9;
        margin: 0;
        float: left;
        padding: 50px;
        & + p {
          --b: #FADE8B;
          & + p {
            --b: #F7F3D7;
          }
        }
      }
    }
  }
</style>
`;
