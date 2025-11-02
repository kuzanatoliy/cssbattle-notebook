module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  body {
    margin: 28px 0 0 110px;
    background: #998235;
    dl {
      float: left;
      margin-right: 20px;
      & + dl {
        scale: 1 -1;
      }
      p {
        padding: 50px 40px;
        background: #1A4341;
        border-radius: 0 50px;
        & + p {
          padding: 30px 40px;
          background: #F3AC3C;
          margin-top: 20px;
        }
      }
    }
  }
</style>
`;
