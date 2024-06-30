module.exports = `
<style>
  * {
    background: #F48B26;
    * {
      margin: 35px;
    }
    p {
      background: linear-gradient(90deg, #FEFF58 200px, 0, #F48B26 210px, 0, #FEFF58);
      height: 50px;
      margin: 10px var(--m, 0);
      & + p {
        --m: 10px;
        & + p {
          --m: 20px;
          & + p {
            --m: 30px;
          }
        }
      }
    }
  }
</style>
`;
