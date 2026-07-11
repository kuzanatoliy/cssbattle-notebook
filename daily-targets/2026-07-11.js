module.exports = `
<p><p><p a><p a><p b><p b>
<style>
  * {
    background: #3157B4;
    margin: 25px 40px 10px;
    p {
      float: left;
      padding: 20px 40px;
      background: #84BE8D;
      margin: 0;
      & + p {
        margin: 0 0 0 var(--m, 50px);
        & + [a] {
          --m: 30px;
          padding: 80px 25px;
          & + p {
            --m: 80px;
            & + [b] {
              padding: 15px 45px;
              --m: 10px;
              & + p {
                --m: 40px;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
