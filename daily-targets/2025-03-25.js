module.exports = `
<p a><p><p>
<style>
  * {
    background: var(--b, #E35158);
    * {
      --b: #D9D9D9;
      margin: 66px 180px 37px;
      [a] {
        --b: #E35158;
        padding: 20px;
        margin: 0;
        border-radius: 9in;
        outline: solid 36px #D9D9D9;
        & + p {
          margin: 86px 0 0;
          padding: 7px 27px;
          & + p {
            margin: 10px 0 0;
            padding: 15px 35px;
          }
        }
      }
    }
  }
</style>
`;
