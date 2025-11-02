module.exports = `
<p><p>
<style>
  * {
    background: #62306D;
    margin: 0;
    p {
      position: fixed;
      padding: 75px 50px;
      top: 50px;
      left: 80px;
      background: #F7EC7D;
      border-radius: 9in;
      box-shadow: inset 0 50px var(--s, #AA445F);
      & + p {
        left: 220px;
        top: 100px;
        scale: -1;
        --s: #E38F66;
      }
    }
  }
</style>
`;
