module.exports = `
<p><p><dl>
<style>
  html, dl {
    background: #2F5A76;
    color: #E8AD6D;
    margin: 12px 0;
    p {
      border: solid 50px;
      border-radius: 9in;
      float: left;
      margin: 0 -2px;
      padding: 80px;
      & + p {
        margin: 0 -128px;
        & + * {
          position: fixed;
          inset: 0 265px 0 0;
          box-shadow: 130px 0 0 -40px;
        }
      }
    }
  }
</style>
`;
