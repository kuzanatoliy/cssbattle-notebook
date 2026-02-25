module.exports = `
<p><p>
<style>
  * {
    background: #9F6766;
    margin: 0;
    p {
      position: fixed;
      background: #BDE4C1;
      inset: 100px 150px;
      rotate: 45deg;
      & + p {
        inset: 0 170px 110px;
        rotate: 0deg;
        color: #9F6766;
        box-shadow: -5vw 0, 5vw 0;
      }
    }
  }
</style>
`;
