module.exports = `
<dl><p><p></dl><dl><p><p>
<style>
  * * {
    background: #4C4C6B;
    margin: 25px 20px;
    dl {
      float: left;
      padding: 0 0 10px;
      background: #FAE29E;
      border-radius: 9in 9in 0 0;
      p {
        padding: 80px 15px;
        margin: 0 55px;
        & + p {
          position: relative;
          padding: 15px 30px;
          margin: 0;
          top: -75px;
        }
      }
      & + * {
        scale: -1;
      }
    }
  }
</style>
`;
