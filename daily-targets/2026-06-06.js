module.exports = `
<p><p>
<style>
  html {
    background: #0D2A58;
    margin: 40px 95px;
  }
  * {
    border: solid;
    border-width: 0 30px;
    margin: -5px 10px;
    border-color: var(--c, 0 #5A9F48 0 #D9D9D9);
    p {
      position: fixed;
      border-width: 30px;
      --c: #5A9F48;
      left: 0;
      top: 40px;
      border-right: 0;
      width: 85px;
      height: 170px;
      border-radius: 9in 0 0 9in;
      & + p {
        left: 265px;
        scale: -1;
        --c: #D9D9D9;
      }
    }
  }
</style>
`;
