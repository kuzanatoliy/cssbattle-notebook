module.exports = `
<p><p><p><p>
<style>
  * {
    background: var(--b, #0D2328);
    margin: 0;
  }
  p {
    position: fixed;
    --b: #357597;
    height: 200px;
    width: 20px;
    inset: 120px 140px;
    & + p {
      left: 240px;
      & + p {
        inset: 80px 75px;
        height: 40px;
        width: 250px;
        --b: #19B3F1;
        & + p {
          inset: 150px 100px;
          width: 200px;
          --b: #80CDF6;
        }
      }
    }
  }
</style>
`;
