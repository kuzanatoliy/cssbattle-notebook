module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #183539);
    body {
      --b: #46BA67;
      color: #46BA67;
      margin: 0 150px;
      p {
        --b: none;
        position: fixed;
        border: solid var(--v, 5vh);
        width: 235px;
        margin: 96px -75px;
        & + p {
          width: 245px;
          height: 245px;
          --v: 30px;
          border-radius: 9in;
          margin: -229px -103px;
        }
      }
    }
  }
</style>
`;
