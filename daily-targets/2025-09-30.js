module.exports = `
<p><p><p><p><dl>
<style>
  * {
    background: #9382E4;
    margin: 15px 30px;
    p {
      margin: 0 210px 28px 28px;
      padding: 16px;
      box-shadow: -14px 14px 0 14px #B6EBE7;
      & + p {
        margin-inline: var(--m, 98px 140px);
        & + p {
          --m: 168px 70px;
          & + p {
            --m: 238px 0;
            & + dl {
              padding: 14px;
              float: left;
              color: #3F595E;
              box-shadow: 40px -223px, 110px -163px, 180px -103px;
            }
          }
        }
      }
    }
  }
</style>
`;
