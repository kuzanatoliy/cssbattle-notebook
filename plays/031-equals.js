module.exports = `
<p><p>
<style>
  * * {
    background: var(--b, #AA445F);
    margin: 50px 75px;
    p {
      margin: 0;
      float: left;
      padding: 100px 50px;
      border-radius: 9in 0 0 9in;
      --b: #F7EC7D;
      & + p {
        --b: #E38F66;
        scale: -1;
        margin: 0 0 0 50px;
      }
    }
  }
</style>
`;
