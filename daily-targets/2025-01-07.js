module.exports = `
<dl><p></dl><dl m><p></dl><dl><p>
<style>
  * {
    background: var(--b, #4A9A86);
    * {
      margin: 110px 50px;
      dl {
        margin: 0 10px;
        float: left;
        height: 40px;
        width: 40px;
        --b: #4C4C6B;
        padding: 20px;
        p {
          --b: #FAE29E;
          height: 40px;
          margin: 0;
          border-radius: 9in;
        }
      }
      [m] {
        --b: #FAE29E;
        p {
          --b: #4C4C6B;
        }
      }
    }
  }
</style>
`;
