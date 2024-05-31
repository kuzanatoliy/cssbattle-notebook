module.exports = `
<dl><p><p><p></dl><dl><p><p><p>
<style>
  * {
    background: var(--b, #0A6190);
    margin: 0;
    body {
      background: red;
      margin: 60px 100px;
    }
    p {
      --b: var(--p, #EFF8FE);
      height: 30px;
      width: 30px;
      border-radius: 9in;
      float: left;
      margin-right: 15px;
    }
    dl {
      height: 60px;
      --b: #328FC1;
      padding: 15px;
      & + dl {
        --b: #EFF8FE;
        --p: #328FC1;
        scale: -1;
      }
    }
  }
</style>
`;
