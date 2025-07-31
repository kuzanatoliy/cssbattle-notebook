module.exports = `
<p><p><p>
<style>
  * {
    background: var(--b, #FFF);
    * {
      margin: 70px 60px;
      p {
        position: fixed;
        height: 110px;
        width: 200px;
        border-radius: 10px;
        --b: #5528A5;
        margin: 0 40px;
        & + p {
          margin: 40px 20px;
          width: 240px;
          --b: #6855BF;
          & + p {
            margin: 80px 0;
            width: 280px;
            --b: #9E8DEC;
          }
        }
      }
    }
  }
</style>
`;
