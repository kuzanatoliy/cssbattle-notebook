module.exports = `
<p><p><p><p><p><p><p><p><p>
<style>
  * {
    background: var(--b, #6592CF);
    body {
      margin: 60px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 45px 35px;
      p {
        margin: 0;
        --b: #EEB850;
        height: 30px;
        width: 70px;
      }
      p:nth-child(even) {
        --b: #243D83;
      }
    }
  }
</style>
`;
