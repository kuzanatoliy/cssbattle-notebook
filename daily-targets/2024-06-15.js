module.exports = `
<dl><p></dl><dl>
<style>
  * {
    background: #0A6190;
    body {
      margin: 60px 125px;
    }
    p {
      height: 20px;
      margin: 0;
    }
    dl {
      background: #328FC1;
      height: 10px;
      margin: 0 50px;
      border-radius: 10px 10px 0 0;
      padding: 10px;
      & + dl {
        margin: 0;
        height: 130px;
        border-radius: 10px 10px 50px 50px;
      }
    }
  }
</style>
`;
