module.exports = `
<p s><p>
<style>
  * {
    background: #2D3464;
    body {
      background: #DAB897;
      margin: 200px 100px 0;
      border-radius: 9in 9in 0 0;
      [s] {
        box-shadow: 0 -80px #DAB897, 0 1px #2D3464;
      }
      p {
        margin: 0 85px;
        height: 60px;
        & + p {
          margin: 10px 150px 0 0;
          -webkit-box-reflect: right 25vw;
        }
      }
    }
  }
</style>
`;
