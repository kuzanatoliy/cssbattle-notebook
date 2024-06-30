module.exports = `
<p><p a><p>
<style>
  * {
    background: #611B3F;
    * {
      background: #BE3184;
      margin: 90px 75px;
      p {
        height: 30px;
        margin: 0;
        float: left;
        width: 60px;
        color: #611B3F;
        box-shadow: -10px 5px 0 5vw;
        -webkit-box-reflect: below var(--r, 60px);
      }
      p + p {
        margin-left: 10px;
      }
      [a] {
        height: 10px;
        width: 110px;
        box-shadow: 0 0 0 10px;
        --r: 25vw;
        & + p {
          box-shadow: 10px 5px 0 5vw;
        }
      }
    }
  }
</style>
`;
