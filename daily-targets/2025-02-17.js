module.exports = `
<p><p>
<style>
  * {
    background: #2D3464;
    * {
      border: solid 30px #D95362;
      border-radius: 9in 9in 0 0;
      border-bottom: 0;
      margin: 150px 140px 85px;
      p {
        position: fixed;
        width: 30px;
        height: 30px;
        margin: 30px -60px;
        border-radius: 0 9in 0 0;
        border-left: 0;
        rotate: 90deg;
        -webkit-box-reflect: var(--r, above 60px);
        & + p {
          margin: 60px -120px;
          scale: -1;
          --r: below 60vh;
        }
      }
    }
  }
</style>
`;
