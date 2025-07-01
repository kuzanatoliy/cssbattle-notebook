module.exports = `
<dl><p></dl><dl><p>
<style>
  * {
    background: #EBF6F0;
    body {
      margin: 20px 5px;
      dl {
        color: #D95362;
        margin: 0 0 0 130px;
        box-shadow: -130px 0;
        & + dl {
          scale: -1;
          margin: 0 130px 0 0;
        }
        p {
          margin: 0;
          border: solid 50px;
          border-bottom: none;
          height: 80px;
          border-radius: 9in 9in 0 0;
        }
      }
    }
  }
</style>
`;
