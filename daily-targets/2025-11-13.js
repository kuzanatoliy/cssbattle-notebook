module.exports = `
<p><p>
<style>
  * {
    background: #264629;
    * {
      background: #CF6939;
      margin: 120px 170px;
      p {
        position: fixed;
        padding: 30px;
        top: -40px;
        left: -40px;
        box-shadow: -5vw -5vw 0 5vw #F8B140;
        -webkit-box-reflect: right 5vw;
        & + p {
          top: 40px;
          scale: 1 -1;
        }
      }
    }
  }
</style>
`;
