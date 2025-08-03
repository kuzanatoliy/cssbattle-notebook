module.exports = `
<p><p b><p><p b><p c><p b><p><p b><p><dl>
<style>
  * {
    margin: 0;
    body {
      background: #FDFFE9;
      margin: -75px -25px;
      [b] {
        background: #2D3464;
      }
      p {
        background: #D95362;
        padding: 75px;
        float: left;
        border-radius: 9in;
        & + dl {
          position: fixed;
          border: solid 5vw #FDFFE9;
          inset: 0 50px;
        }
      }
      [c] {
        border-radius: 0;
      }
    }
  }
</style>
`;
