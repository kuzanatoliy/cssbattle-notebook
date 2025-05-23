module.exports = `
<p><p l><p t><p l t>
<style>
  * {
    margin: 15px 40px;
    background: #BFE33A;
    p {
      box-shadow: inset 40px 40px #5A9F48;
      float: left;
      padding: 40px;
      margin: 0;
      & + p {
        rotate: -90deg;
        & + p {
          rotate: -270deg;
          & + p {
            rotate: -180deg;
          }
        }
      }
    }
    [l] {
      margin-left: 80px;
    }
    [t] {
      margin-top: 80px;
    }
  }
</style>
`;
