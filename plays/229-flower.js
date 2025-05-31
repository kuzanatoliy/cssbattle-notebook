module.exports = `
<p><p>
<style>
  * {
    background: #F4DCBF;
    * {
      background: #D95362;
      margin: 135px 185px;
      p {
        position: fixed;
        inset: -30vw 30px 30px -60px;
        border-radius: 0 9in;
        -webkit-box-reflect: below 30px;
        & + p {
          left: 30px;
          right: -60px;
          scale: -1 1;
        }
      }
    }
  }
</style>
`;
