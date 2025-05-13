module.exports = `
<p><p>
<style>
  * {
    background: #F4DCBF;
    * {
      background: #D95362;
      margin: 135px 185px;
      p {
        margin: 0;
        position: fixed;
        inset: 5vh 215px 55vh 125px;
        border-radius: 0 9in;
        -webkit-box-reflect: below 30px;
        & + p {
          inset-inline: 215px 125px;
          scale: -1 1;
        }
      }
    }
  }
</style>
`;
