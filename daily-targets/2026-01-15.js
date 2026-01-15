module.exports = `
<p><p>
<style>
  * {
    background: #5AA4B7;
    body {
      background: #2B2A4A;
      margin: 75px 125px;
      padding: 10px;
      p {
        height: 50px;
        width: 50px;
        border-radius: 9in;
        box-shadow: 80px 0 #5AA4B7, var(--s, -70px) 0 #2B2A4A;
        & + p {
          margin-top: 30px;
          --s: 50vh;
        }
      }
    }
  }
</style>
`;
