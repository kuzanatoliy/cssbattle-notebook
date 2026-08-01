module.exports = `
<p><p><dl><dl>
<style>
  * * {
    background: #AF6A8A;
    margin: 65px 60px;
    dl {
      position: fixed;
      inset: 60px;
      right: 0;
      * {
        inset-block: 0;
        right: 170px;
      }
    }
    p {
      background: #742020;
      float: left;
      border-radius: 9in;
      padding: 85px;
      margin: 0;
      & + p {
        margin-left: -60px;
      }
    }
  }
</style>
`;
