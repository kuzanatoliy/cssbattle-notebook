module.exports = `
<p>
<style>
  * {
    background: var(--b, #75CF34);
    body {
      --b: #963032;
      margin: 100px 140px 160px;
      -webkit-box-reflect: below 5vw;
      p {
        height: 40px;
        width: 40px;
        color: #963032;
        box-shadow: 10px -5vw, 70px -5vw;
      }
    }
  }
</style>
`;
