module.exports = `
<p><p><p><p><p><p>
<style>
  * {
    background: var(--b, #62306D);
    * {
      margin: 17px 100px 17px 105px;
      p {
        --b: #AA445F;
        width: 70px;
        height: 110px;
        margin: 0 0 45px -5px;
        float: left;
        &:nth-child(odd) {
          --b: #E38F66;
          border-radius: 9in;
          height: 70px;
          margin-block: 20px 65px;
        }
      }
    }
  }
</style>
`;
