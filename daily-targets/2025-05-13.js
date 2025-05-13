module.exports = `
<p><dl>
<style>
  * {
    background: #E3CC9E;
    * {
      position: fixed;
      background: #D95F5B;
      border-radius: 9in 9in 0 0;
      inset: 22px 72px 142px;
      p {
        margin: 0;
        scale: -1;
        height: 40px;
        width: 80px;
        margin: 128px 8px;
        -webkit-box-reflect: left 80px;
        & + dl {
          inset: 50px 180px -20px;
        }
      }
    }
  }
</style>
`;
