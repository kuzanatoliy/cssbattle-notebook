module.exports = `
<p><p><p><p><p><p>
<style>
  * {
    background: #394257;
    margin: 10px;
    * {
      background: red;
    }
    p {
      float: left;
      padding: 130px 30px;
      margin: 0;
      background: linear-gradient(#394257 var(--a, 0), 0, #EED9D9 var(--b, 60px), 0, #668884 var(--c, 0), 0, #EED9D9 var(--d, 0), 0, #394257);
      & + p {
        --a: 60px;
        --b: 30vw;
        & + p {
          --a: 5vw;
          --b: 80px;
          --c: 30vw;
          --d: 45vw;
          & + p {
            --a: 80px;
            --b: 35vw;
            --c: 45vw;
            --d: 60vw;
            & + p {
              --a: 35vw;
              --b: 50vw;
              --d: 0;
              & + p {
                --a: 50vw;
                --b: 65vw;
              }
            }
          }
        }
      }
    }
  }
</style>
`;
