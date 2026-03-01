module.exports = `
<p>
<style>
  * {
    background: #F7CB71;
    border: solid #7C3219;
    border-width: var(--w, 40px 0);
    margin: 40px 140px;
    body {
      border-radius: 30px;
    }
    * {
      margin: 10px 0;
      --w: 30px 0;
      * {
        --w: 20px;
      }
    }
  }
</style>
`;
